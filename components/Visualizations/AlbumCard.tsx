import { useReactToPrint } from "react-to-print";
import Link from "next/link";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const StreamChartSquareNoSSR = dynamic(
  () => import("../Visualizations/StreamChartSquare"),
  { ssr: false }
);

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
    onBeforeGetContent: () => setPrinting(true),
    onAfterPrint: () => setPrinting(false),
  });
  return (
    <div className="flex flex-col">
      <div
        ref={ref}
        className="print:w-full print:border-2 print:border-gray-200"
      >
        <li className="hover:shadow-lg transition-all col-span-1 cursor-pointer flex flex-col text-center bg-white rounded-lg shadow print:shadow-none print:rounded-none">
          <div className="w-full h-48 mb-0 mt-0 content-center -scale-x-1 rotate-180 print:mb-14 print:w-full">
            <StreamChartSquareNoSSR
              dataUrl={album.url}
              people={people}
              printing={printing}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex-1 flex flex-col p-8 pb-4">
              <Link href={`unrated/${album.url}`} passHref>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-32 h-32 flex-shrink-0 mx-auto rounded-full hover:animate-spin"
                    src={album.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">
                    {album.name}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">{album.title}</dd>
                    <dt className="sr-only">Artist</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
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
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 mx-10"
        onClick={handlePrint}
      >
        Print
      </button>
    </div>
  );
}
