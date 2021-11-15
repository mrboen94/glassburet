import type { NextPage } from "next";
import data from "../lib/timeplan.json";
import ScheduleContainer from "../components/ScheduleContainer";
import EventCard from "../components/EventCard";

const Home: NextPage = () => {
  return (
    <div className="mx-auto">
      <ScheduleContainer>
        <p>this is a test</p>
        {Object.entries(data).map(() => (
          <EventCard>stuff: blah</EventCard>
        ))}
      </ScheduleContainer>
    </div>
  );
};

export default Home;
