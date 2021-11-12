import ScheduleContainer from "./components/ScheduleContainer";
import EventCard from "./components/EventCard";
import data from "./data/timeplan.json";

const d = new Date();
const day = d.getDay();

function App() {
  return (
    <div className="mx-auto">
      <ScheduleContainer>
        <p>this is a test</p>
        {data.map(() => (
          <EventCard>stuff: {day}</EventCard>
        ))}
      </ScheduleContainer>
    </div>
  );
}

export default App;
