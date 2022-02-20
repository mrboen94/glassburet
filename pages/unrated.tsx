import React, { useState } from "react";
import FilterMenu from "../components/FilterMenu";
import AlbumCard from "../components/Visualizations/AlbumCard";

// TODO: Move albums to another file
const unrated = [
  {
    name: "Amalie Holt Kleive",
    title: "Jeg Går Når Andre Løper",
    role: "Synth-pop",
    imageUrl: "amalieHoltKleive-jegGårNårAndreLøper.jpg",
    url: "amalieHoltKleive-jegGårNårAndreLøper",
  },
  {
    name: "Fleetwood Mac",
    title: "Rumors",
    role: "Rock/Pop-rock",
    imageUrl: "fleetwoodMac-rumors.jpg",
    url: "fleetwoodMac-rumors",
  },
  {
    name: "Highasakite",
    title: "Mother",
    role: "Indie/Alternative, Pop",
    imageUrl: "highasakite-mother.jpg",
    url: "highasakite-mother",
  },
  {
    name: "Nothing But Thieves",
    title: "Nothing But Thieves",
    role: "Alternative rock",
    imageUrl: "nbt-nbt.jpg",
    url: "nothingButThieves-nothingButThieves",
  },
  {
    name: "The Weeknd",
    title: "DAWN FM",
    role: "Dance-pop/Synth-pop",
    imageUrl: "dawn_fm.png",
    url: "theWeeknd-DAWN-FM",
  },
  // {
  //   name: "Sondre Nilsen",
  //   title: "Rakk ikke pilsen",
  //   role: "K-pop",
  //   imageUrl: "sondreNilsen.jpg",
  //   url: "SondreNilsen-RakkIkkePilsen",
  // },
];

const people = {
  Mathias: { checked: false, color: null },
  Sandra: { checked: false, color: null },
  Sondre: { checked: false, color: null },
  Christian: { checked: false, color: null },
  Kristoffer: { checked: false, color: null },
  Gerhard: { checked: false, color: null },
  Kenneth: { checked: false, color: null },
  Andres: { checked: false, color: null },
  Eivind: { checked: false, color: null },
  Isabell: { checked: false, color: null },
};

const themes = [
  { scheme: "nivo" },
  { scheme: "category10" },
  { scheme: "accent" },
  { scheme: "dark2" },
  { scheme: "paired" },
  { scheme: "pastel1" },
  { scheme: "pastel2" },
  { scheme: "set1" },
  { scheme: "set2" },
  { scheme: "set" },
];

export type People = typeof people;
export type Theme = { scheme: string };

export default function Unrated() {
  const [peopleData, setPeopleData] = useState<typeof people>(people);
  const [currentTheme, setCurrentTheme] = useState(0);

  return (
    <>
      <FilterMenu
        people={peopleData}
        onChange={setPeopleData}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        themes={themes}
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {unrated.map((album, i) => (
            <AlbumCard
              key={i}
              album={album}
              people={peopleData}
              theme={themes[currentTheme]}
            />
          ))}
        </ul>
      </FilterMenu>
    </>
  );
}
