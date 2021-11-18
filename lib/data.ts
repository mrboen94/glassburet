import { getISODay, isAfter } from "date-fns";

export interface DayPlan {
  name: string;
  activities: Array<Entry>;
}

export type Activity = "coffee" | "food" | "training" | "wake-up" | "day-over";

export interface Entry {
  name: string;
  description: string;
  activity: Activity;
  time: Date | string;
}

const time = (hour: number, minute: number): Date => {
  const date = new Date();
  date.setHours(hour, minute, 0, 0);

  return date;
};

const clamp = (number: number): number => {
  var min = 0;
  var max = 7;
  return Math.min(Math.max(number, min), max);
};

export const getToday = (): DayPlan => {
  var localTime = new Date();
  var day = getISODay(localTime);
  var nextDay = new Date().setHours(20, 0, 0, 0);

  if (isAfter(localTime, nextDay)) {
    return DAY_PLAN[clamp((day + 1) % 7)];
  }
  return DAY_PLAN[day];
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
