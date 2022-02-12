import { ResponsiveStream } from "@nivo/stream";
import { useEffect, useState } from "react";

export default function StreamChartSquare({
  dataUrl,
  people,
  printing,
  theme,
}) {
  const [dataLink, _] = useState(`/unrated/${dataUrl}.json`);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalScore, setTotalScore] = useState(100);
  const [currentVis, setCurrentVis] = useState("diverging");
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

  function switchVisualizations() {
    switch (currentVis) {
      case "diverging":
        setCurrentVis("wiggle");
        break;
      case "wiggle":
        setCurrentVis("silhouette");
        break;
      case "silhouette":
        setCurrentVis("expand");
        break;
      default:
        setCurrentVis("diverging");
        break;
    }
    console.log(currentVis);
  }

  function hasColor(color) {
    if (color) {
      return true;
    } else {
      return false;
    }
  }

  return !loading && data ? (
    <div className="relative bottom-0 right-0 left-0 h-24 w-full overflow-hidden rounded-lg transition-all print:h-48 print:overflow-visible print:rounded-none">
      <div onClick={handleClick} className="rotate-180 -scale-x-1">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center print:hidden"
            aria-hidden="true"
          >
            <div className="mx-10 w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center print:absolute print:left-1/3 print:right-1/3 print:justify-start print:text-center">
            <span className="mx-auto bg-white px-3 text-lg font-medium text-gray-900 print:mt-40 print:bg-transparent print:p-0 print:text-xl print:text-gray-800">
              {data.map((person) => {
                Object.values(person).map((points) => {
                  if (points === parseInt(points, 10)) {
                    score = score + points;
                    totalPoints = totalPoints + 10;
                  }
                });
              })}
              {`${Math.round(
                (score / totalPoints) * totalScore
              )} / ${totalScore}`}
            </span>
          </div>
        </div>
      </div>
      {printing ? (
        <div
          className="h-50 relative left-0 right-0 hidden w-full overflow-visible print:block print:w-screen"
          onClick={switchVisualizations}
        >
          <ResponsiveStream
            data={data}
            height={currentVis === "diverging" ? 200 : 190}
            keys={Object.keys(data[0]).filter((key) => key !== "Song")}
            width={795}
            enableGridX={false}
            enableGridY={false}
            axisBottom={null}
            axisLeft={null}
            axisRight={null}
            axisTop={null}
            isInteractive={false}
            enableStackTooltip={false}
            offsetType={currentVis}
            order="descending"
            colors={theme}
            fillOpacity={1}
            borderWidth={1}
            borderColor="inherit"
            margin={
              currentVis === "diverging"
                ? { top: 2, right: 0, bottom: 0, left: 0 }
                : { top: 2, right: 0, bottom: 2, left: 0 }
            }
            defs={Object.entries(people).map(([person, val]) => {
              if (val.checked) {
                return {
                  id: person,
                  type: "patternDots",
                  background: "inherit",
                  color: "#2c998f",
                  size: 4,
                  padding: 2,
                  stagger: true,
                };
              }
              return {
                id: person,
                type: "patternDots",
                background: val.color,
                color: val.color,
                borderWidth: 0,
                size: 4,
                padding: 2,
                stagger: true,
              };
            })}
            fill={Object.entries(people).map(([person, val]) =>
              val.checked
                ? {
                    match: {
                      id: person,
                    },
                    id: person,
                  }
                : hasColor(val.color)
                ? {
                    match: {
                      id: person,
                    },
                    id: person,
                  }
                : {
                    match: {
                      id: "xyzthiswillneverhappen",
                    },
                    id: "dots",
                  }
            )}
          />
        </div>
      ) : (
        <div
          className="relative left-0 right-0 h-24 overflow-hidden rounded-lg print:hidden"
          onClick={switchVisualizations}
        >
          <ResponsiveStream
            data={data}
            keys={Object.keys(data[0]).filter((key) => key !== "Song")}
            height={currentVis !== "diverging" ? 68 : 70}
            enableGridX={false}
            enableGridY={false}
            axisBottom={null}
            axisLeft={null}
            axisRight={null}
            axisTop={null}
            isInteractive={false}
            enableStackTooltip={false}
            offsetType={currentVis}
            order="descending"
            colors={theme}
            fillOpacity={1}
            borderWidth={1}
            borderColor="inherit"
            margin={
              currentVis === "diverging"
                ? { top: 2, right: 0, bottom: 0, left: 0 }
                : { top: 2, right: 0, bottom: 2, left: 0 }
            }
            defs={Object.entries(people).map(([person, val]) => {
              if (val.checked) {
                return {
                  id: person,
                  type: "patternDots",
                  background: "inherit",
                  color: "#2c998f",
                  size: 4,
                  padding: 2,
                  stagger: true,
                };
              }
              return {
                id: person,
                type: "patternDots",
                background: val.color,
                color: val.color,
                borderWidth: 0,
                size: 4,
                padding: 2,
                stagger: true,
              };
            })}
            fill={Object.entries(people).map(([person, val]) =>
              val.checked
                ? {
                    match: {
                      id: person,
                    },
                    id: person,
                  }
                : hasColor(val.color)
                ? {
                    match: {
                      id: person,
                    },
                    id: person,
                  }
                : {
                    match: {
                      id: "xyzthiswillneverhappen",
                    },
                    id: "dots",
                  }
            )}
          />
        </div>
      )}
    </div>
  ) : (
    <div>loading data...</div>
  );
}
