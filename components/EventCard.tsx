import { Activity, DayPlan, DAY_PLAN } from "../lib/data";
import {
  MdCoffee,
  MdDinnerDining,
  MdStars,
  MdAccessAlarm,
  MdCheck,
} from "react-icons/md";

const getToday = (): DayPlan => {
  return DAY_PLAN[0];
};

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

export const Day = (): JSX.Element => {
  const today = getToday();

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {today.activities.map((plan, planIdx) => (
          <li key={plan.time.toString()}>
            <div className="relative pb-8">
              {planIdx !== today.activities.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-1 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <span className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                    {getIcon(plan.activity)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm">{plan.name}</div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {plan.time.toString()}
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
