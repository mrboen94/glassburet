import { Activity, DayPlan, Entry, PlainEntry } from "../lib/data";
import {
  MdCoffee,
  MdDinnerDining,
  MdStars,
  MdAccessAlarm,
  MdCheck,
  MdOutlineCheckCircleOutline,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import {
  formatDistance,
  formatRelative,
  isAfter,
  isBefore,
  parseISO,
  format,
} from "date-fns";
import { nb } from "date-fns/locale";
import { useState } from "react";

const getIcon = (activity: Activity): JSX.Element => {
  switch (activity) {
    case "coffee":
      return <MdCoffee />;
    case "food":
      return <MdDinnerDining />;
    case "training":
      return <MdStars />;
    case "wake-up":
      return <MdAccessAlarm />;
    case "day-over":
      return <MdCheck />;
  }
};

const formatDate = (date: Date): string => {
  if (isAfter(new Date(), date))
    return formatRelative(date, new Date(), { locale: nb });
  if (isBefore(new Date(), date))
    return formatDistance(date, new Date(), {
      addSuffix: true,
      locale: nb,
    });

  return format(date, "HH:mm");
};

interface ApiEntry extends PlainEntry {
  time: string;
}

interface Props {
  day: {
    name: string;
    activities: Array<ApiEntry>;
  };
}

const DayEntry = ({ entry }: { entry: ApiEntry }): JSX.Element => {
  const time = parseISO(entry.time as string);
  const isEntryAfter = isAfter(time, new Date());

  return (
    <div className="relative flex items-start space-x-3">
      <div className="relative">
        {isEntryAfter ? (
          <span className="h-10 w-10 rounded-full bg-blue-300 text-blue-900 flex items-center justify-center ring-8 ring-white">
            {getIcon(entry.activity)}
          </span>
        ) : (
          <span className="h-10 w-10 rounded-full bg-green-300 text-green-900 flex items-center justify-center ring-8 ring-white">
            <MdOutlineCheckCircleOutline />
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div>
          <div className={isEntryAfter ? "" : "text-gray-400 " + "text-sm"}>
            {entry.name}
          </div>
          <p
            className={
              isEntryAfter
                ? "text-gray-500 "
                : "text-gray-400 " + "mt-0.5 text-sm"
            }
          >
            {formatDate(time)}
          </p>
        </div>
        <div
          className={
            isEntryAfter ? "text-gray-700 " : "text-gray-400 " + "mt-2 text-sm"
          }
        >
          <p>{entry.description}</p>
        </div>
      </div>
    </div>
  );
};

interface EventListProps {
  events: Array<ApiEntry>;
}

const EventList = ({ events }: EventListProps): JSX.Element => {
  return (
    <ul role="list" className="-mb-8">
      {events.map((plan, planIdx) => {
        const nextEntry = events[planIdx + 1];
        return (
          <li key={planIdx}>
            <div className="relative pb-8">
              {nextEntry && isAfter(parseISO(nextEntry.time), new Date()) ? (
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

interface ShowProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ShowMore = ({ show, setShow }: ShowProps): JSX.Element => (
  <div className="relative mt-8">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
    </div>
    <div className="relative flex justify-center">
      <button
        onClick={() => setShow(!show)}
        type="button"
        className="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {show ? (
          <MdExpandLess
            className="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        ) : (
          <MdExpandMore
            className="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        )}
        <span>Previously...</span>
      </button>
    </div>
  </div>
);

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
