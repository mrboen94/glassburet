import { google } from "googleapis";

function formatAlmbumData(data) {
  const headers = data.shift();
  const people = headers.splice(6, headers.length);
  let albumIndex = 0;

  const albumDataTest = {};

  const albumData = data.map((album) => {
    return {
      index: parseInt(album[0]),
      imageId: album[1],
      genre: album[2],
      artist: album[3],
      albumName: album[4],
      song: album[5],
      scores: {
        ...people
          .map((person, index) =>
            album[index + 6]
              ? {
                  name: person ? person : null,
                  score: parseInt(album[index + 6]),
                }
              : null
          )
          .filter((person) => person),
      },
    };
  });

  // Add name to array first
  let album = [];
  let response = [];

  for (let i = 0; i < albumData.length; i++) {
    albumData[i].index === albumIndex
      ? album.push(albumData[i])
      : (response.push(album),
        // Clear array and readd name to new album
        (album = []),
        albumIndex++);
  }
  response.push(album);

  return response;
}

export async function getAlbumRatings() {
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
      spreadsheetId: process.env.ALBUM_SPREADSHEET_ID,
      range: "Ratings",
    });

    const values = response.data.values;

    if (values.length) {
      const albumData = formatAlmbumData(values);
      return albumData;
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}

export async function getAnmerkninger() {
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
