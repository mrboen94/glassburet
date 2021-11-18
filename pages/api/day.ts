import { NextApiRequest, NextApiResponse } from "next";
import { DayPlan, getToday } from "../../lib/data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<DayPlan>
) {
  res.status(200).json(getToday());
}
