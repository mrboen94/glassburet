import { NextApiRequest, NextApiResponse } from "next";
import { ApiDayPlan, getTomorrow } from "../../lib/data";
import { add } from "date-fns";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ApiDayPlan>
) {
  const tomorrow = getTomorrow();
  const data = {
    ...tomorrow,
    activities: tomorrow.activities
      .map((it) => ({
        ...it,
        time: add(new Date(), { days: 1 }).setUTCHours(
          it.time.hour,
          it.time.minute
        ),
      }))
      .sort((a, b) => b.time - a.time),
  };

  res.status(200).json(data);
}
