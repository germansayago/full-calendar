const fromApiResponseToEvents = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const events = data.map((event) => {
      return {
        //TODO: format date
        // publication_date: event.publication_date,
        title: event.title,
        date: event.start_date,
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
