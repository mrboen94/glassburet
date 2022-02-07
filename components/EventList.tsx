import { DayEntry } from "./Entry";
import { isAfter, isBefore } from "date-fns";
import VerticalBar from "./VerticalBar";
import { AppEntry } from "../lib/data";

interface Props {
  events: Array<AppEntry>;
}

const isBetween = (start: Date, end: Date): boolean => {
  return isAfter(start, new Date()) && isBefore(end, new Date());
};

const currentProgress = (
  start: Date,
  nextEvent: Date,
  current: Date
): number => {
  const nextEventTime = nextEvent.getTime();
  const startTime = start.getTime() - nextEventTime;
  const currentTime = current.getTime() - nextEventTime;
  const fraction = currentTime / startTime;
  return fraction * 100;
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
                <span aria-hidden="true">
                  <VerticalBar
                    progress={currentProgress(
                      plan.time,
                      nextEntry.time,
                      new Date()
                    )}
                  />
                </span>
              ) : nextEntry && isAfter(nextEntry.time, new Date()) ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-1 bg-blue-200"
                  aria-hidden="true"
                />
              ) : planIdx !== events.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-1 bg-green-200 fade transform duration-200"
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
