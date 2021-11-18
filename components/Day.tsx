import { Activity, DayPlan, Entry } from "../lib/data";
import {
  MdCoffee,
  MdDinnerDining,
  MdStars,
  MdAccessAlarm,
  MdCheck,
  MdOutlineCheckCircleOutline,
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

interface Props {
  day: DayPlan;
}

const DayEntry = ({ entry }: { entry: Entry }): JSX.Element => {
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

export const Day = ({ day }: Props): JSX.Element => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {day.activities.map((plan, planIdx) => {
          const nextEntry = day.activities[planIdx + 1];
          return (
            <li key={planIdx}>
              <div className="relative pb-8">
                {nextEntry &&
                isAfter(parseISO(nextEntry.time as string), new Date()) ? (
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-1 bg-gray-400"
                    aria-hidden="true"
                  />
                ) : planIdx !== day.activities.length - 1 ? (
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
    </div>
  );
};
