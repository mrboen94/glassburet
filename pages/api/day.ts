import { NextApiRequest, NextApiResponse } from "next";
import { DayPlan, Entry, getToday } from "../../lib/data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<DayPlan>
) {
  const data = getToday();
  const activities = [...data.activities].sort(
    (a: Entry, b: Entry) => b.time.getTime() - a.time.getTime()
  );
  data.activities = activities;

  res.status(200).json(data);
}
