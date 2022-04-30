import { NextPage } from "next";
import Head from "next/head";
import {
  SoeleAnmerkning,
  TidsAnmerkning,
  TreningsAnmerkning,
} from "../components/Visualizations/helpers/Anmerkning";
import { getAlbumRatings, getAnmerkninger } from "../lib/sheets";

const Marks: NextPage = ({ anmerkninger, albumRatings }: any) => {
  return (
    <>
      <Head>
        <title>Anmerkninger</title>
      </Head>
      {console.log(albumRatings)}
      <div>
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Navn
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Tidsanmerkning
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Treningsanmerkning
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Søleanmerkning
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Totalt
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {anmerkninger.map((data: any) => (
              <tr key={data.data[0]}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {data.data[0]}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <TidsAnmerkning number={parseInt(data.data[1], 10)} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <TreningsAnmerkning number={parseInt(data.data[2], 10)} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <SoeleAnmerkning number={parseInt(data.data[3], 10)} />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {parseInt(data.data[1], 10) +
                    parseInt(data.data[2], 10) +
                    parseInt(data.data[3], 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await getAnmerkninger();
  const albumRes = await getAlbumRatings();
  const anmerkninger = res.slice(1, res.length);
  const albumRatings = albumRes;
  return {
    props: { anmerkninger, albumRatings },
    revalidate: 1,
  };
}

export default Marks;
