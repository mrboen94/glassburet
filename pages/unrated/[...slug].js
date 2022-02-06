import dynamic from "next/dynamic";

const StreamChartNoSSR = dynamic(() => import("./StreamChart"), { ssr: false });

function Home() {
  return (
    <div className="w-screen h-screen max-w-screen-sm max-h-96 md:max-w-md md:max-h-md lg:max-h-lg lg:max-w-lg  2xl:max-h-7xl 2xl:max-w-7xl">
      <StreamChartNoSSR />
    </div>
  );
}

export default Home;
