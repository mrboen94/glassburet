import { PlainEntry } from "../lib/data";
import { ShowMore } from "./ShowMore";
import { EventList } from "./EventList";
import { isAfter, isBefore, parseISO } from "date-fns";
import { useState } from "react";
import { Time } from "./Time";

export interface ApiEntry extends PlainEntry {
  time: string;
}

interface Props {
  day: {
    name: string;
    activities: Array<ApiEntry>;
  };
}

export const Day = ({ day }: Props): JSX.Element => {
  const [show, setShow] = useState(false);
  let after = day.activities.filter((it) =>
    isBefore(parseISO(it.time), new Date())
  );
  const before = day.activities.filter((it) =>
    isAfter(parseISO(it.time), new Date())
  );

  if (after.length > 0) {
    before.push(after[0]);
    after = after.slice(1);
  }

  return (
    <>
      <div className="text-center p-8">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
          <Time />
        </h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {day.name}
        </p>
      </div>
      <div className="flow-root">
        <EventList events={before} />
        <ShowMore show={show} setShow={setShow} />
        {show && <EventList events={after} />}
      </div>
    </>
  );
};
