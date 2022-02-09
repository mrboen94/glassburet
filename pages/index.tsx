import type { NextPage } from "next";
import Head from "next/head";
import Loader from "react-loader-spinner";
import useSWR from "swr";
import { Day } from "../components/Day";
import { convertApiResponse, showNextDay } from "../lib/data";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const endpoint = showNextDay() ? "tomorrow" : "today";
  const { data, error } = useSWR(`/api/${endpoint}`, fetcher);

  if (error) return <div>Something went wrong :(</div>;
  if (!data) return <div>Loading...</div>;

  const day = convertApiResponse(data);

  return (
    <>
      <Head>
        <title>Glassburet - hvem, hva, hvor</title>
        <link rel="icon" href="/gb.svg" />
      </Head>
      <main className="w-96 mx-auto">
        {!data ? (
          <div className="mx-0 mt-4 flex place-content-center">
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <Day day={day} />
        )}
      </main>
    </>
  );
};

export default Home;
