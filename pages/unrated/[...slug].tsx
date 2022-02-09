import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Scoreboard from "../../components/Visualizations/Scoreboard";

const StreamChartNoSSR = dynamic(
  () => import("../../components/Visualizations/StreamChart"),
  { ssr: false }
);

export default function Album() {
  const router = useRouter();
  const [slug, setSlug] = useState<string>("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    router.query.slug && setSlug(`/unrated/${router.query.slug[0]}.json`);
  }, [router]);

  useEffect(() => {
    setLoading(true);
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? setMobile(true)
      : setMobile(false);
    slug &&
      fetch(slug)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
  }, [slug]);

  return (
    <div className="h-full w-11/12 md:max-w-md lg:max-w-lg 2xl:max-w-7xl">
      {!loading && data ? (
        <>
          <div className="w-full h-full flex flex-col">
            <Scoreboard data={data} />
            <StreamChartNoSSR data={data} mobile={mobile} />
            <div className="hidden absolute top-0 right-0 left-0 bottom-0 h-screen w-screen print:block">
              <Scoreboard data={data} />
            </div>
          </div>
        </>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
}
