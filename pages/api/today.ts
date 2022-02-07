import { NextApiRequest, NextApiResponse } from "next";
import { ApiDayPlan, getToday, setDate } from "../../lib/data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ApiDayPlan>
) {
  const today = getToday();
  const data = {
    ...today,
    activities: today.activities
      .map((it) => ({
        ...it,
        time: setDate(it.time).toISOString(),
      }))
      .reverse(),
  };

  res.status(200).json(data);
}
