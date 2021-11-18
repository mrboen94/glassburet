import { Activity, DayPlan } from "../lib/data";
import {
  MdCoffee,
  MdDinnerDining,
  MdStars,
  MdAccessAlarm,
  MdCheck,
  MdOutlineCheckCircleOutline,
} from "react-icons/md";
import {
  format,
  formatDistance,
  formatRelative,
  isAfter,
  isBefore,
  parseISO,
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

const formatDate = (date: string): string => {
  const converted = parseISO(date);
  if (isAfter(new Date(), converted))
    return formatRelative(converted, new Date(), { locale: nb });
  if (isBefore(new Date(), converted))
    return formatDistance(converted, new Date(), {
      addSuffix: true,
      locale: nb,
    });

  return format(converted, "HH:mm");
};

interface Props {
  day: DayPlan;
}

export const Day = ({ day }: Props): JSX.Element => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {day.activities.map((plan, planIdx) => (
          <li key={planIdx}>
            <div className="relative pb-8">
              {planIdx !== day.activities.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-1 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  {isAfter(parseISO(plan.time as string), new Date()) ? (
                    <span className="h-10 w-10 rounded-full bg-blue-300 text-blue-900 flex items-center justify-center ring-8 ring-white">
                      {getIcon(plan.activity)}
                    </span>
                  ) : (
                    <span className="h-10 w-10 rounded-full bg-green-300 text-green-900 flex items-center justify-center ring-8 ring-white">
                      <MdOutlineCheckCircleOutline />
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm">{plan.name}</div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {formatDate(plan.time as string)}
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>{plan.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
