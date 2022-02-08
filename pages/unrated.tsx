import React, { useState } from "react";
import FilterMenu from "../components/FilterMenu";
import AlbumCard from "../components/Visualizations/AlbumCard";

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
  Mathias: { checked: false, color: null },
  Sandra: { checked: false, color: null },
  Sondre: { checked: false, color: null },
  Christian: { checked: false, color: null },
  Gerhard: { checked: false, color: null },
  Kenneth: { checked: false, color: null },
};

export type People = typeof people;

export default function Unrated() {
  const [peopleData, setPeopleData] = useState<typeof people>(people);

  return (
    <>
      <FilterMenu people={peopleData} onChange={setPeopleData}>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {unrated.map((album, i) => (
            <AlbumCard key={i} album={album} people={peopleData} />
          ))}
        </ul>
      </FilterMenu>
    </>
  );
}
