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
    <div className="flex flex-col w-full">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 print:m-0">
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg print:w-full">
            <table
              className="divide-y divide-gray-200 print:w-full"
              ref={songPrint}
            >
              <thead className="bg-gray-50 print:w-full">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sangnummer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tittel
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Poeng
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Lyrikk
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Melodi
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Replayability
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Danceability
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Energi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((datapoint: any, idx: number) => (
                  <tr key={datapoint}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {idx}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {datapoint.Song && datapoint.Song}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 print:opacity-0">
                      {Object.values(datapoint).map((points: any) => {
                        if (points === parseInt(points, 10)) {
                          score = score + points;
                          totalPoints = totalPoints + 10;
                        } else {
                          totalPoints = 0;
                          score = 0;
                        }
                      })}
                      {!noScores
                        ? `${Math.round(
                            ((score - 1) / totalPoints) * 100
                          )} / 100`
                        : ""}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {datapoint.Lyrics && !noScores && datapoint.Lyrics}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {datapoint.Melody && !noScores && datapoint.Melody}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {datapoint.Replayability &&
                        !noScores &&
                        datapoint.Replayability}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {datapoint.Danceability &&
                        !noScores &&
                        datapoint.Danceability}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
          className="inline-flex xs:hidden items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 mt-4 mx-10"
          onClick={printSongList}
        >
          Print list without scores
        </button>
      </div>
    </div>
  );
}
