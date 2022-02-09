import { useReactToPrint } from "react-to-print";
import Link from "next/link";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";

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
}: {
  album: any;
  people: any;
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
      <div ref={ref} className="print:w-full print:h-full">
        <li className="hover:shadow-lg col-span-1 cursor-pointer flex flex-col text-center bg-white print:bg-gradient-radial from-yellow-200 via-yellow-900 to-gray-900 rounded-lg shadow print:shadow-none print:rounded-none print:h-screen print:m-0 print:p-0">
          <div className="w-full h-24 print:h-64 mb-0 mt-0 content-center -scale-x-1 rotate-180 print:mb-14 print:w-full">
            <StreamChartSquareNoSSR
              dataUrl={album.url}
              people={people}
              printing={printing}
            />
          </div>
          <div className="flex flex-col print:h-full">
            <div className="flex-1 flex flex-col p-8 pb-4">
              <Link href={`unrated/${album.url}`} passHref>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-32 h-32 flex-shrink-0 mx-auto rounded-full hover:animate-spin print:animate-none print:w-48 print:h-48 print:mt-28"
                    src={album.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium print:text-2xl">
                    {album.name}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm print:text-7xl print:text-gray-800">
                      {album.title}
                    </dd>
                    <dt className="sr-only">Artist</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 print:text-yellow-800 print:bg-yellow-100 text-xs font-medium bg-green-100 rounded-full">
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
          className="inline-flex xs:hidden items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4 mx-10"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
}
