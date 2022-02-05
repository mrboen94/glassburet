import type { NextPage } from "next";
import Head from "next/head";
import Loader from "react-loader-spinner";
import useSWR from "swr";
import { Day } from "../components/Day";
import Sidebar from "../components/Sidebar";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/day", fetcher);

  if (error) return <div>Something went wrong :(</div>;

  return (
    <>
      <Head>
        <title>Glassburet - hvem, hva, hvor</title>
        <link rel="icon" href="/gb.svg" />
      </Head>
      <main className="max-w-lg mx-auto">
        {!data ? (
          <div className="mx-0 mt-4 flex place-content-center">
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <Day day={data} />
        )}
      </main>
    </>
  );
};

export default Home;
