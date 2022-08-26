import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

export default function Calendar() {
  const handleEventClick = (clickInfo) => {
    clickInfo.jsEvent.preventDefault();
    // console.log(clickInfo);

    if (clickInfo.event.url) {
      window.open(clickInfo.event.url, '_blank');
    }
  };
  // const handleDateClick = (info) => {
  //   info.jsEvent.preventDefault();
  //   console.log(info.dateStr);
  // };
  return (
    <FullCalendar
      plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
      headerToolbar={{
        left: 'dayGridMonth,timeGridWeek,timeGridDay',
        center: 'title',
        right: 'today prev,next'
      }}
      navLinks={true}
      editable={false}
      dayMaxEvents={false}
      eventClick={handleEventClick}
      locale={esLocale}
      // contentHeight={"auto"}
      height={'auto'}
      // events={events}
      events={`https://admin.visitariocuarto.gob.ar/api/v1/events`}
    />
  );
}
