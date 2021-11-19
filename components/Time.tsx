import { format } from "date-fns";
import { useEffect, useState } from "react";

export const Time = (): JSX.Element => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{format(time, "HH:mm")}</span>;
};
