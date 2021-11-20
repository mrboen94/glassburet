import { DayEntry } from "./Entry";
import { ApiEntry } from "./Day";
import { isAfter, isBefore, parseISO } from "date-fns";

interface Props {
  events: Array<ApiEntry>;
}
const isBetween = (start: string, end: string): boolean => {
  return (
    isAfter(parseISO(start), new Date()) && isBefore(parseISO(end), new Date())
  );
};

export const EventList = ({ events }: Props): JSX.Element => {
  return (
    <ul role="list" className="-mb-8">
      {events.map((plan, planIdx) => {
        const nextEntry = events[planIdx + 1];
        return (
          <li key={planIdx}>
            <div className="relative pb-8">
              {nextEntry && isBetween(plan.time, nextEntry.time) ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full bg-gray-400 animate-pulse w-1"
                  aria-hidden="true"
                />
              ) : nextEntry && isAfter(parseISO(nextEntry.time), new Date()) ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-1 bg-gray-400"
                  aria-hidden="true"
                />
              ) : planIdx !== events.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-1 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <DayEntry entry={plan} key={planIdx} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
