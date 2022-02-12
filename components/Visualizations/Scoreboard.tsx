import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function Scoreboard({ data }: { data: any }) {
  const songPrint = useRef(null);
  const [noScores, setNoScores] = useState(false);
  var score = 0;
  var totalPoints = 0;

  const printSongList = useReactToPrint({
    content: () => songPrint.current,
    onBeforePrint: () => setNoScores(true),
    onAfterPrint: () => setNoScores(false),
  });
  return (
    <div className="flex w-full flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 print:m-0">
        <div className="inline-block py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg print:w-full">
            <table
              className="divide-y divide-gray-200 print:w-full"
              ref={songPrint}
            >
              <thead className="bg-gray-50 print:w-full">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Sangnummer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Tittel
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Poeng
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Lyrikk
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Melodi
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Replayability
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Danceability
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Energi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((datapoint: any, idx: number) => (
                  <tr key={datapoint}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {idx}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {datapoint.Song && datapoint.Song}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 print:opacity-0">
                      {Object.values(datapoint).map((points: any) => {
                        if (points === parseInt(points, 10)) {
                          score = score + points;
                          totalPoints = totalPoints + 10;
                          console.log(score, totalPoints);
                        } else {
                          totalPoints = 0;
                          score = 0;
                        }
                      })}
                      {!noScores
                        ? `${Math.round((score / totalPoints) * 100)} / 100`
                        : ""}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {datapoint.Lyrics && !noScores && datapoint.Lyrics}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {datapoint.Melody && !noScores && datapoint.Melody}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {datapoint.Replayability &&
                        !noScores &&
                        datapoint.Replayability}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {datapoint.Danceability &&
                        !noScores &&
                        datapoint.Danceability}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {datapoint.Energy && !noScores && datapoint.Energy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          type="button"
          className="xs:hidden mx-10 mt-4 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 hover:bg-gray-50"
          onClick={printSongList}
        >
          Print list without scores
        </button>
      </div>
    </div>
  );
}
