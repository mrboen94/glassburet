import { ResponsiveStream } from "@nivo/stream";
import { useEffect, useState } from "react";
import { keys } from "../../lib/keyData";
import { People } from "../../pages/unrated";

export default function StreamChartSquare({
  dataUrl,
  people,
  printing,
}: {
  dataUrl: string;
  people: People;
  printing: boolean;
}) {
  const [dataLink, _] = useState(`/unrated/${dataUrl}.json`);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [totalScore, setTotalScore] = useState(100);
  var score = 0;
  var totalPoints = 0;

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

  function handleClick() {
    setTotalScore(totalScore === 100 ? 6 : 100);
  }

  return !loading && data ? (
    <div className="w-full h-48 transition-all relative bottom-0 right-0 left-0 rounded-lg overflow-hidden print:rounded-none print:overflow-visible">
      <div onClick={handleClick} className="-scale-x-1 rotate-180">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full mx-10 border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-lg font-medium text-gray-900">
              {data.map((person: Array<any>) => {
                Object.values(person).map((points) => {
                  if (points === parseInt(points, 10)) score = score + points;
                  totalPoints = totalPoints + 10;
                });
              })}{" "}
              {`${Math.round(
                ((score - 1) / (totalPoints - 100)) * totalScore
              )} / ${totalScore}`}
            </span>
          </div>
        </div>
      </div>
      <div className="hidden print:block relative h-48 w-full overflow-visible left-0 right-0 print:w-screen">
        <ResponsiveStream
          data={data}
          keys={keys}
          height={170}
          width={800}
          axisTop={null}
          axisRight={null}
          enableGridX={false}
          enableGridY={false}
          isInteractive={false}
          enableStackTooltip={false}
          offsetType="diverging"
          order="ascending"
          colors={{ scheme: "nivo" }}
          fillOpacity={1}
          borderWidth={1}
          margin={{ top: 2, right: 0, bottom: 0, left: 0 }}
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
      </div>
      <div className="relative h-48 left-0 right-0 print:w-screen">
        <ResponsiveStream
          data={data}
          keys={keys}
          height={170}
          axisTop={null}
          axisRight={null}
          enableGridX={false}
          enableGridY={false}
          isInteractive={false}
          enableStackTooltip={false}
          offsetType="diverging"
          order="ascending"
          colors={{ scheme: "nivo" }}
          fillOpacity={1}
          borderWidth={1}
          margin={{ top: 2, right: 0, bottom: 0, left: 0 }}
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
        )
      </div>
    </div>
  ) : (
    <div>loading data...</div>
  );
}
