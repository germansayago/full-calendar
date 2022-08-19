import { useEffect, useState } from "react";
import { getEvents } from "../services/getEvents";

export function useEvents() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getEvents().then((events) => {
        setEvents(events);
        setLoading(false);
      });
    },
    [setEvents]
  );

  return { loading, events };
}
