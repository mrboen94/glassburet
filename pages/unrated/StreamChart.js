import { ResponsiveStream } from "@nivo/stream";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function StreamChart() {
  const router = useRouter();
  const [slug, setSlug] = useState(null);
  const [data, setData] = useState(null);
  const [cleanData, setCleanData] = useState(null);
  const [keys, setKeys] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    router.query.slug && setSlug(`/unrated/${router.query.slug[0]}.json`);
  }, [router]);

  useEffect(() => {
    setLoading(true);
    slug &&
      fetch(slug)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
  }, [slug]);

  useEffect(() => {
    data && (setKeys(data[0].keys), data.shift());
  }, [data]);

  return !loading && data && keys ? (
    <ResponsiveStream
      data={data}
      keys={keys}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
      }}
      enableGridX={true}
      enableGridY={false}
      offsetType="diverging"
      order="ascending"
      colors={{ scheme: "nivo" }}
      fillOpacity={0.85}
      borderColor={{ theme: "background" }}
      legends={[
        {
          anchor: "right",
          direction: "column",
          translateX: 90,
          translateY: 0,
          itemWidth: 80,
          itemHeight: 16,
          itemTextColor: "#999999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
              },
            },
          ],
        },
      ]}
    />
  ) : (
    <div>loading data...</div>
  );
}
