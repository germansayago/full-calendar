import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { useEvents } from "./hooks/useEvents";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/app.scss";

function App() {
  const { loading, events } = useEvents();

  // console.log(events);

  const handleEventClick = (clickInfo) => {
    clickInfo.jsEvent.preventDefault();

    if (clickInfo.event.url) {
      window.open(clickInfo.event.url, "_blank");
    }
  };

  return (
    <>
      {loading ? (
        "cargando"
      ) : (
        <FullCalendar
          plugins={[
            interactionPlugin,
            dayGridPlugin,
            timeGridPlugin,
            bootstrap5Plugin,
          ]}
          themeSystem={"bootstrap5"}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          navLinks={true}
          editable={false}
          dayMaxEvents={true}
          selectable={true}
          selectMirror={false}
          eventClick={handleEventClick}
          locale={esLocale}
          // height="auto"
          // contentHeight="auto"
          events={events}
        />
      )}
    </>
  );
}

export default App;
