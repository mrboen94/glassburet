import type { NextPage } from "next";
import { Day } from "../components/EventCard";

const Home: NextPage = () => {
  return (
    <main className="max-w-lg mx-auto">
      <Day />
    </main>
  );
};

export default Home;
