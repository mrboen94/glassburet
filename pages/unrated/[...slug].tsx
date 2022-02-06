import dynamic from "next/dynamic";

const StreamChartNoSSR = dynamic(
  () => import("../../components/Visualizations/StreamChart"),
  { ssr: false }
);

function Home() {
  return (
    <div className="h-full w-11/12 md:max-w-md lg:max-w-lg 2xl:max-w-7xl">
      <StreamChartNoSSR />
    </div>
  );
}

export default Home;
