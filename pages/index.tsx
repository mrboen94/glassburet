import type { NextPage } from "next";
import { Day } from "../components/Day";

const Home: NextPage = () => {
  return (
    <main className="max-w-lg mx-auto">
      <Day />
    </main>
  );
};

export default Home;
