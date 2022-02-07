import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import FilterMenu from "../components/FilterMenu";

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
  return (
    <>
      {/* <CheckBoxList people={peopleData} onChange={setPeopleData} /> */}
      <FilterMenu people={peopleData} onChange={setPeopleData}>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {unrated.map((album) => (
            <li
              key={album.title}
              className="hover:shadow-lg transition-all col-span-1 cursor-pointer flex flex-col text-center bg-white rounded-lg shadow "
            >
              <div className="md:w-full h-24 m-10 mb-0 mt-0 md:mx-auto content-center overflow-hidden -scale-x-1 rotate-180">
                <StreamChartSquareNoSSR
                  dataUrl={album.url}
                  people={peopleData}
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
          ))}
        </ul>
      </FilterMenu>
    </>
  );
}
