import { useReactToPrint } from "react-to-print";
import Link from "next/link";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Theme } from "../../pages/unrated";

const StreamChartSquareNoSSR = dynamic(
  () => import("../Visualizations/StreamChartSquare"),
  { ssr: false }
);

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function AlbumCard({
  album,
  people,
  theme,
}: {
  album: any;
  people: any;
  theme: Theme;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [printing, setPrinting] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    onBeforeGetContent: () => delay(1000).then(() => setPrinting(true)),
    onAfterPrint: () => setPrinting(false),
  });
  return (
    <div className="flex flex-col">
      <div ref={ref} className="print:h-full print:w-full">
        <li className="col-span-1 flex flex-col rounded-lg bg-white from-yellow-200 via-yellow-900 to-gray-900 text-center shadow hover:shadow-lg print:m-0 print:h-screen print:rounded-none print:bg-gradient-radial print:p-0 print:shadow-none">
          <div className="mb-0 mt-0 h-24 w-full rotate-180 -scale-x-1 content-center print:mb-14 print:h-64 print:w-full">
            <StreamChartSquareNoSSR
              dataUrl={album.url}
              people={people}
              printing={printing}
              theme={theme}
            />
          </div>
          <div className="flex flex-col print:h-full">
            <div className="flex flex-1 cursor-pointer flex-col p-8 pb-4">
              <Link href={`unrated/${album.url}`} passHref>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mx-auto h-32 w-32 flex-shrink-0 rounded-full hover:animate-spin print:mt-28 print:h-48 print:w-48 print:animate-none"
                    src={album.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900 print:text-2xl">
                    {album.name}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500 print:text-7xl print:text-gray-800">
                      {album.title}
                    </dd>
                    <dt className="sr-only">Artist</dt>
                    <dd className="mt-3">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 print:bg-yellow-100 print:text-yellow-800">
                        {album.role}
                      </span>
                    </dd>
                  </dl>
                </div>
              </Link>
            </div>
          </div>
        </li>
      </div>
      <div className="flex">
        <button
          type="button"
          className="xs:hidden mx-10 mt-4 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-gray-50"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
}
