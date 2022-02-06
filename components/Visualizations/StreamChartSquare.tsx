import { ResponsiveStream } from "@nivo/stream";
import { useEffect, useState } from "react";
import { People } from "../../pages/unrated";

export default function StreamChartSquare({
  dataUrl,
  people,
}: {
  dataUrl: string;
  people: People;
}) {
  const [dataLink, _] = useState(`/unrated/${dataUrl}.json`);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dataLink &&
      fetch(dataLink)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
  }, [dataLink]);

  useEffect(() => {
    console.log(people);
  }, [people]);

  return !loading && data ? (
    <ResponsiveStream
      data={data}
      keys={Object.keys(data[0])}
      axisTop={null}
      axisRight={null}
      enableGridX={false}
      enableGridY={false}
      isInteractive={false}
      offsetType="expand"
      order="ascending"
      colors={{ scheme: "nivo" }}
      fillOpacity={0.85}
      borderColor={{ theme: "background" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#2c998f",
          size: 4,
          padding: 2,
          stagger: true,
        },
        {
          id: "squares",
          type: "patternSquares",
          background: "inherit",
          color: "#e4c912",
          size: 6,
          padding: 2,
          stagger: true,
        },
      ]}
      fill={Object.entries(people)
        .filter(([person, checked]) => checked)
        .map(([person, checked]) => ({
          match: {
            id: person,
          },
          id: "dots",
        }))}
    />
  ) : (
    <div>loading data...</div>
  );
}
