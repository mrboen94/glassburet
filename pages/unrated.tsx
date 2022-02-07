import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useRef, useState } from "react";
import FilterMenu from "../components/FilterMenu";
import { useReactToPrint } from "react-to-print";

// TODO: Move albums to another file
const unrated = [
  {
    name: "The Weeknd",
    title: "DAWN FM",
    role: "Dance-pop/Synth-pop",
    imageUrl: "dawn_fm.png",
    url: "theWeeknd-DAWN-FM",
  },
  {
    name: "Sondre Nilsen",
    title: "Rakk ikke pilsen",
    role: "K-pop",
    imageUrl: "sondreNilsen.jpg",
    url: "SondreNilsen-RakkIkkePilsen",
  },
];

const people = {
  Mathias: false,
  Sandra: false,
  Sondre: false,
  Christian: false,
  Gerhard: false,
  Kenneth: false,
};

export type People = typeof people;

const StreamChartSquareNoSSR = dynamic(
  () => import("../components/Visualizations/StreamChartSquare"),
  { ssr: false }
);

export default function Unrated() {
  const [peopleData, setPeopleData] = useState<typeof people>(people);
  const refs = useMemo<any>(() => unrated.map(() => React.createRef()), []);
  const [printing, setPrinting] = useState(false);
  const handlePrint = useReactToPrint({
    content: () => refs[0].current,
    onBeforeGetContent: () => setPrinting(true),
    onAfterPrint: () => setPrinting(false),
  });

  useEffect(() => {
    refs[0].current.focus();
  }, []);
  return (
    <>
      {/* <CheckBoxList people={peopleData} onChange={setPeopleData} /> */}
      <FilterMenu people={peopleData} onChange={setPeopleData}>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {unrated.map((album, i) => (
            <div
              key={i}
              ref={refs[i]}
              onClick={handlePrint}
              className="print:w-full print:border-2 print:border-gray-200"
            >
              <li className="hover:shadow-lg transition-all col-span-1 cursor-pointer flex flex-col text-center bg-white rounded-lg shadow print:shadow-none print:rounded-none">
                <div className="w-full h-48 mb-0 mt-0 content-center -scale-x-1 rotate-180 print:mb-14 print:w-full">
                  <StreamChartSquareNoSSR
                    dataUrl={album.url}
                    people={peopleData}
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
                          <dd className="text-gray-500 text-sm">
                            {album.title}
                          </dd>
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
          ))}
        </ul>
      </FilterMenu>
    </>
  );
}
