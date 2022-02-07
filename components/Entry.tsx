import { Activity, AppEntry, TIME_ZONE } from "../lib/data";
import {
  MdCoffee,
  MdDinnerDining,
  MdStars,
  MdAccessAlarm,
  MdCheck,
  MdOutlineCheckCircleOutline,
} from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { formatDistance, formatRelative, isAfter, isBefore } from "date-fns";
import { nb } from "date-fns/locale";
import { format, formatInTimeZone } from "date-fns-tz";

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
    case "waffle":
      return <IoMdHeart />;
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

  return formatInTimeZone(date, TIME_ZONE, "HH:mm");
};

export const DayEntry = ({ entry }: { entry: AppEntry }): JSX.Element => {
  const isEntryAfter = isAfter(entry.time, new Date());

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
            {formatDate(entry.time)}
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
