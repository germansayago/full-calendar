const fromApiResponseToEvents = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const events = data.map((event) => {
      return {
        //TODO: format date
        publication_date: event.publication_date,
        title: event.title,
        date: event.start_date + " " + event.start_time,
        start: event.start_date + " " + event.start_time,
        end: event.end_date + " " + event.end_time,
        url: `https://destinoriocuarto.gob.ar/evento/${event.id}/${event.slug}?utm_source=calendar&utm_medium=referral`,
      };
    });
    return events;
  }
  return [];
};

export function getEvents() {
  const apiURL = "https://admin.visitariocuarto.gob.ar/api/v1/events";
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToEvents)
    .catch((error) => {
      console.error("Error: ", error);
    });
}
