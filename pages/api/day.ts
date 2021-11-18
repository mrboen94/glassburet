import { NextApiRequest, NextApiResponse } from "next";
import { DayPlan, getToday } from "../../lib/data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<DayPlan>
) {
  const data: DayPlan = getToday();
  const activities = data.activities.map((it) => ({
    ...it,
    time: (it.time as Date).toISOString(),
  }));
  data.activities = activities;
  res.status(200).json(getToday());
}
