import { useEffect, useState } from "react";
const useEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data.data));
  }, []);
  return [events, setEvents];
};
export default useEvents;
