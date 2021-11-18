import type { NextPage } from "next";
import useSWR from "swr";
import { Day } from "../components/Day";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/day", fetcher);

  if (error) return <div>Something went wrong :(</div>;
  if (!data) return <div>Got no data :(</div>;

  return (
    <main className="max-w-lg mx-auto">
      <Day day={data} />
    </main>
  );
};

export default Home;
