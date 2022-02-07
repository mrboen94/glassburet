import { google } from "googleapis";

export async function getMarks() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "anmerkninger", // sheet name
    });

    const rows = response.data.values;

    if (rows.length) {
      const people = rows[0];
      const time = rows[1];
      const workout = rows[2];
      const spill = rows[3];
      const total = rows[4];
      return people.map((_, idx) => ({
        data: [people[idx], time[idx], workout[idx], spill[idx], total[idx]],
      }));
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}
