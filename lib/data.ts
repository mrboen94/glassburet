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

export const DAY_PLAN: Record<number, DayPlan> = {
  0: {
    name: "Mandag",
    activities: [
      {
        name: "Stå opp",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "wake-up",
        time: new Date(),
      },
      {
        name: "Trening",
        description: "Nå skal vi ha det ekstra gøy, MED Å LIDE LITT EKSTRA.",
        activity: "training",
        time: new Date(),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: new Date(),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: new Date(),
      },
      {
        name: "Lunsj",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: new Date(),
      },
      {
        name: "Kaffe",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "coffee",
        time: new Date(),
      },
      {
        name: "Lunsh",
        description: "På tide å komme seg opp for å lide nok en dag.",
        activity: "food",
        time: new Date(),
      },
    ],
  },
};
