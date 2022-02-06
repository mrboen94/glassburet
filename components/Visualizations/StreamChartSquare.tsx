import { ResponsiveStream } from "@nivo/stream";
import { useEffect, useState } from "react";
import { keys } from "../../lib/keyData";
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
    <div className="w-full h-full transition-all">
      <ResponsiveStream
        data={data}
        keys={keys}
        axisTop={null}
        axisRight={null}
        enableGridX={false}
        enableGridY={false}
        isInteractive={true}
        enableStackTooltip={false}
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
      <p onClick={handleClick}>
        {data.map((person: Array<number>) => {
          Object.values(person).map((points) => {
            if (points === parseInt(points, 10)) score = score + points;
            totalPoints = totalPoints + 10;
            console.log(points);
          });
        })}{" "}
        {`${Math.round(
          ((score - 1) / (totalPoints - 100)) * totalScore
        )} / ${totalScore}`}
      </p>
    </div>
  ) : (
    <div>loading data...</div>
  );
}
