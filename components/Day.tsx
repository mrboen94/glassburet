import { PlainEntry } from "../lib/data";
import { ShowMore } from "./ShowMore";
import { EventList } from "./EventList";
import { getISODay, isAfter, isBefore, parseISO } from "date-fns";
import { useState } from "react";
import { Time } from "./Time";

export interface ApiEntry extends PlainEntry {
  time: string;
}

interface Props {
  day: {
    name: string;
    id: number;
    activities: Array<ApiEntry>;
    time: Date;
  };
}

export const Day = ({ day }: Props): JSX.Element => {
  const [show, setShow] = useState(false);

  var localTime = new Date();
  var ISODay = getISODay(localTime);
  var today = ISODay === day.id;

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
        <h2 className="text-lg font-semibold text-blue-500 tracking-wide uppercase">
          <Time />
        </h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {day.name}
        </p>
      </div>
      <div className="flow-root">
        <EventList events={before} />
        {today ? <ShowMore show={show} setShow={setShow} /> : null}
        {show && <EventList events={after} />}
      </div>
    </>
  );
};
