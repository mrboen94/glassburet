import { getISODay, isAfter } from "date-fns";

export interface DayPlan {
  name: string;
  activities: Array<Entry>;
}

export interface ApiDayPlan {
  name: string;
  activities: Array<ApiEntry>;
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
  time: {
    hour: number;
    minute: number;
  };
}

export interface ApiEntry extends PlainEntry {
  time: number;
}

export const showNextDay = (): boolean => {
  const localTime = new Date();
  const nextDay = new Date().setHours(20, 0, 0, 0);

  return isAfter(localTime, nextDay);
};

export const getToday = (): DayPlan => {
  const localTime = new Date();
  const day = getISODay(localTime);

  return DAY_PLAN[day];
};

export const getTomorrow = (): DayPlan => {
  const localTime = new Date();
  const day = getISODay(localTime);

  return DAY_PLAN[(day + 1) % 7];
};

const TRAINING_DAY_ACTIVITIES: Array<Entry> = [
  {
    name: "Stå opp",
    description: "På tide å komme seg opp for å lide nok en dag.",
    activity: "wake-up",
    time: { hour: 6, minute: 0 },
  },
  {
    name: "Trening",
    description: "Nå skal vi ha det ekstra gøy, MED Å LIDE LITT EKSTRA.",
    activity: "training",
    time: { hour: 7, minute: 15 },
  },
  {
    name: "Lunsj",
    description: "På tide med næring for slappe studenter.",
    activity: "food",
    time: { hour: 8, minute: 30 },
  },
  {
    name: "Kaffe",
    description: "Viktig med påfyll med avhengighetsskapende midler.",
    activity: "coffee",
    time: { hour: 10, minute: 0 },
  },
  {
    name: "Lunsj",
    description: "Mat? MAT",
    activity: "food",
    time: { hour: 13, minute: 0 },
  },
  {
    name: "Kaffe",
    description: "Skal vi bare late som om dette hjelper deg?",
    activity: "coffee",
    time: { hour: 14, minute: 0 },
  },
  {
    name: "Lunsj",
    description: "Lunsj igjen, nå kan vi snakke om hvor lite vi har gjort.",
    activity: "food",
    time: { hour: 16, minute: 0 },
  },
  {
    name: "Koffeinfri kaffe",
    description: "Er det aldri for sent med kaffe?",
    activity: "coffee",
    time: { hour: 18, minute: 0 },
  },
];

const LAZY_DAY_ACTIVITIES: Array<Entry> = [
  {
    name: "Stå opp",
    description: "På tide å komme seg opp for å lide nok en dag.",
    activity: "wake-up",
    time: { hour: 6, minute: 30 },
  },
  {
    name: "Lunsj",
    description: "Viktig å starte dagen med frokost alt for tidlig.",
    activity: "food",
    time: { hour: 7, minute: 30 },
  },
  {
    name: "Kaffe",
    description: "Du trenger noe som gjør at du kan late som om du gjør noe.",
    activity: "coffee",
    time: { hour: 10, minute: 0 },
  },
  {
    name: "Lunsj",
    description: "Mat igjen, fordi det trenger du...",
    activity: "food",
    time: { hour: 13, minute: 0 },
  },
  {
    name: "Kaffe",
    description: "Sa noen mer kaffe?",
    activity: "coffee",
    time: { hour: 14, minute: 0 },
  },
  {
    name: "Lunsj",
    description: "Om dette er middagen er det ganske trist.",
    activity: "food",
    time: { hour: 16, minute: 0 },
  },
  {
    name: "Koffeinfri kaffe",
    description: "Viktig å avslutte dagen med lavmål.",
    activity: "coffee",
    time: { hour: 18, minute: 0 },
  },
];

const WEEKEND_ACTIVITIES: Array<Entry> = [
  {
    name: "Stå opp",
    description: "Hvorfor stå opp tidlig i en helg?",
    activity: "wake-up",
    time: { hour: 9, minute: 0 },
  },
  {
    name: "Lunsj",
    description: "Lunsj klokka 10, på skolen, i en helg?!?",
    activity: "food",
    time: { hour: 10, minute: 30 },
  },
  {
    name: "Kaffe",
    description: "Fordi du ikke får gjort noe i ukedagen?",
    activity: "coffee",
    time: { hour: 12, minute: 0 },
  },
  {
    name: "Lunsj",
    description: "Har du ikke noe bedre å gjøre i ei helg?",
    activity: "food",
    time: { hour: 14, minute: 0 },
  },
  {
    name: "Kaffe",
    description: "Påfyll av nektar fra gudene.",
    activity: "coffee",
    time: { hour: 16, minute: 0 },
  },
  {
    name: "Koffeinfri kaffe",
    description: "Altså, kom deg hjem.",
    activity: "coffee",
    time: { hour: 18, minute: 0 },
  },
];

export const DAY_PLAN: Record<number, DayPlan> = {
  1: {
    name: "Mandag",
    activities: [...TRAINING_DAY_ACTIVITIES],
  },
  2: {
    name: "Tirsdag",
    activities: [...LAZY_DAY_ACTIVITIES],
  },
  3: {
    name: "Onsdag",
    activities: [...TRAINING_DAY_ACTIVITIES],
  },
  4: {
    name: "Torsdag",
    activities: [
      ...LAZY_DAY_ACTIVITIES,
      {
        name: "Vaffel",
        description: "På tide å kaste i seg deg ukentlige vaffelen.",
        activity: "waffle",
        time: { hour: 14, minute: 0 },
      },
    ],
  },
  5: {
    name: "Fredag",
    activities: [...TRAINING_DAY_ACTIVITIES],
  },
  6: {
    name: "Lørdag",
    activities: [...WEEKEND_ACTIVITIES],
  },
  7: {
    name: "Søndag",
    activities: [...WEEKEND_ACTIVITIES],
  },
};
