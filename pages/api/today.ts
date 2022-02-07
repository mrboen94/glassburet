import { NextApiRequest, NextApiResponse } from "next";
import { ApiDayPlan, getToday } from "../../lib/data";

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
        time: new Date().setUTCHours(it.time.hour, it.time.minute),
      }))
      .sort((a, b) => b.time - a.time),
  };

  res.status(200).json(data);
}
