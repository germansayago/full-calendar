import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./App.css";
import { useEvents } from "./hooks/useEvents";

function App() {
  const { loading, events } = useEvents();

  return (
    <main className="container-fluid pt-3">
      <div className="row justify-content-center">
        <div className="col-md-10">
          {loading ? (
            "cargando"
          ) : (
            <FullCalendar plugins={[dayGridPlugin]} events={events} />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
