import { PlainEntry } from "../lib/data";
import { ShowMore } from "./ShowMore";
import { EventList } from "./EventList";
import { isAfter, isBefore, parseISO } from "date-fns";
import { useState } from "react";

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
    <div className="flow-root">
      <EventList events={before} />
      <ShowMore show={show} setShow={setShow} />
      {show && <EventList events={after} />}
    </div>
  );
};
