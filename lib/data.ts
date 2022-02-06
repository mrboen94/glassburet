import { getISODay, isAfter } from "date-fns";

export interface DayPlan {
  name: string;
  id: number;
  activities: Array<Entry>;
}

export type Activity =
  | "coffee"
  | "food"
  | "waffle"
  | "training"
  | "wake-up"
  | "day-over";

export interface PlainEntry {
  name: string;
  description: string;
  activity: Activity;
}

export interface Entry extends PlainEntry {
  time: Date;
}

const time = (hour: number, minute: number): Date => {
  const date = new Date();
  date.setUTCHours(hour - 1, minute, 0, 0);

  return date;
};

const clamp = (number: number): number => {
  var min = 1;
  var max = 7;
  return Math.max(Math.min(number, min), max);
};

export const getToday = (): DayPlan => {
  var localTime = new Date();
  var day = getISODay(localTime);
  var nextDay = new Date().setHours(20, 0, 0, 0);
  var nextDayPlan = Object.assign(DAY_PLAN);

  // TODO: Fix this as it runs every single time state changes anywhere!
  if (isAfter(localTime, nextDay)) {
    nextDayPlan[clamp((day + 1) % 7)].activities.map((e: Entry) => {
      e.time.setDate(localTime.getDate() + 1);
    });
    return DAY_PLAN[clamp((day + 1) % 7)];
  }
  return DAY_PLAN[day];
};

export const DAY_PLAN: Record<number, DayPlan> = {
  1: {
    id: 1,
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
        name: "Koffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  2: {
    id: 2,
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
        name: "Koffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  3: {
    id: 3,
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
        name: "Koffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  4: {
    id: 4,
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
        name: "Vaffel",
        description: "På tide å kaste i seg deg ukentlige vaffelen.",
        activity: "waffle",
        time: time(14, 0),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: time(16, 0),
      },
      {
        name: "Koffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  5: {
    id: 5,
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
        name: "Koffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  6: {
    id: 6,
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
        name: "Koffeinfri kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
  7: {
    id: 7,
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
        name: "Koffeinfri kaffe",
        description: "Slutten på ei lang veke",
        activity: "coffee",
        time: time(18, 0),
      },
    ],
  },
};
