import { ResponsiveStream } from "@nivo/stream";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { keys } from "../../lib/keyData";

export default function StreamChart() {
  const router = useRouter();
  const [slug, setSlug] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  var score = 0;
  var totalPoints = 0;

  const stackToolTipComp = (props) => {
    return <p>I am a React.FunctionComponent</p>;
  };
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

  return !loading && data ? (
    <div className="w-full h-full flex flex-col xl:flex-row">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Track number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((datapoint, idx) => (
                    <tr key={datapoint}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {idx}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {datapoint.Song}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {Object.values(datapoint).map((points) => {
                          if (points === parseInt(points, 10)) {
                            score = score + points;
                            totalPoints = totalPoints + 10;
                          } else {
                            totalPoints = 0;
                            score = 0;
                          }
                        })}
                        {`${Math.round(
                          ((score - 1) / totalPoints) * 100
                        )} / 100`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 min-h-96 min-w-full h-96 w-96">
        <ResponsiveStream
          data={data}
          keys={keys}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickValues: data.map((_, idx) => [idx]),
            tickSize: 5,
            tickPadding: 5,
            legend: "Track number",
            legendOffset: 30,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total points",
            legendPosition: "middle",
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
      </div>
    </div>
  ) : (
    <div>loading data...</div>
  );
}
