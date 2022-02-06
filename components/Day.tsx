import { ShowMore } from "./ShowMore";
import { EventList } from "./EventList";
import { isAfter, isBefore } from "date-fns";
import { useState } from "react";
import { Time } from "./Time";
import { ApiDayPlan } from "../lib/data";

export const Day = ({ day }: { day: ApiDayPlan }): JSX.Element => {
  const [show, setShow] = useState(false);

  let after = day.activities.filter((it) => isBefore(it.time, new Date()));
  const before = day.activities.filter((it) => isAfter(it.time, new Date()));

  if (after.length > 0) {
    before.push(after[0]);
    after = after.slice(1);
  }

  return (
    <>
      <div className="text-center p-8 max-w-md">
        <h2 className="text-lg font-semibold text-blue-500 tracking-wide uppercase">
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
