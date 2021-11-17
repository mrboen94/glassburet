import { intervalToDuration } from "date-fns";

export interface DayPlan {
  name: string;
  activities: Array<Entry>;
}

export type Activity = "coffee" | "food" | "training" | "wake-up" | "day-over";

export interface Entry {
  name: string;
  description: string;
  activity: Activity;
  time: Date;
}

interface Time {
  hour: number;
  minute: number;
}

const time = (hour: number, minute: number): Date => {
  const date = new Date();
  date.setHours(hour, minute, 0, 0);

  return date;
};

const constructTime = (startTime: Time, endTime: Time): Duration => {
  const start = new Date();
  const end = new Date();

  start.setHours(startTime.hour, startTime.minute);
  end.setHours(endTime.hour, endTime.minute);

  return intervalToDuration({ start, end });
};

export const DAY_PLAN: Record<number, DayPlan> = {
  1: {
    name: "Mandag",
    activities: [
      {
        name: "Stå opp",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "wake-up",
        time: time(6, 0),
      },
      {
        name: "Trening",
        description: "Nå skal vi ha det ekstra gøy, MED Å LIDE LITT EKSTRA.",
        activity: "training",
        time: time(7, 15),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(8, 30),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(10, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(13, 0),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(14, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(16, 0),
      },
      {
        name: "Kaffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  2: {
    name: "Tirsdag",
    activities: [
      {
        name: "Stå opp",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "wake-up",
        time: time(6, 0),
      },
      {
        name: "Trening",
        description: "Nå skal vi ha det ekstra gøy, MED Å LIDE LITT EKSTRA.",
        activity: "training",
        time: time(7, 15),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(8, 30),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(10, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(13, 0),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(14, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(16, 0),
      },
      {
        name: "Kaffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  3: {
    name: "Onsdag",
    activities: [
      {
        name: "Stå opp",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "wake-up",
        time: time(6, 0),
      },
      {
        name: "Trening",
        description: "Nå skal vi ha det ekstra gøy, MED Å LIDE LITT EKSTRA.",
        activity: "training",
        time: time(7, 15),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(8, 30),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(10, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(13, 0),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(14, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(16, 0),
      },
      {
        name: "Kaffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  4: {
    name: "Torsdag",
    activities: [
      {
        name: "Stå opp",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "wake-up",
        time: time(6, 0),
      },
      {
        name: "Trening",
        description: "Nå skal vi ha det ekstra gøy, MED Å LIDE LITT EKSTRA.",
        activity: "training",
        time: time(7, 15),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(8, 30),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(10, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(13, 0),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(14, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(16, 0),
      },
      {
        name: "Kaffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  5: {
    name: "Fredag",
    activities: [
      {
        name: "Stå opp",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "wake-up",
        time: time(6, 0),
      },
      {
        name: "Trening",
        description: "Nå skal vi ha det ekstra gøy, MED Å LIDE LITT EKSTRA.",
        activity: "training",
        time: time(7, 15),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(8, 30),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(10, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(13, 0),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(14, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(16, 0),
      },
      {
        name: "Kaffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  6: {
    name: "Lørdag",
    activities: [
      {
        name: "Stå opp",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "wake-up",
        time: time(6, 0),
      },
      {
        name: "Trening",
        description: "Nå skal vi ha det ekstra gøy, MED Å LIDE LITT EKSTRA.",
        activity: "training",
        time: time(7, 15),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(8, 30),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(10, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(13, 0),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(14, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(16, 0),
      },
      {
        name: "Kaffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  7: {
    name: "Søndag",
    activities: [
      {
        name: "Stå opp",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "wake-up",
        time: time(6, 0),
      },
      {
        name: "Trening",
        description: "Nå skal vi ha det ekstra gøy, MED Å LIDE LITT EKSTRA.",
        activity: "training",
        time: time(7, 15),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(8, 30),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(10, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(13, 0),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(14, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(16, 0),
      },
      {
        name: "Kaffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
};
