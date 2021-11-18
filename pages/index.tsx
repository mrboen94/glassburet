import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { Day } from "../components/Day";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/day", fetcher);

  if (error) return <div>Something went wrong :(</div>;

  return (
    <>
      <Head>
        <title>Glassburet - hvem, hva, hvor</title>
      </Head>
      <main className="max-w-lg mx-auto">
        {!data ? <p>Loading...</p> : <Day day={data} />}
      </main>
    </>
  );
};

export default Home;
