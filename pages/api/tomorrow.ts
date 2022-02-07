import { formatISO } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiDayPlan, getTomorrow, setDate } from "../../lib/data";

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
        time: formatISO(setDate(it.time, 1)),
      }))
      .reverse(),
  };

  res.status(200).json(data);
}
