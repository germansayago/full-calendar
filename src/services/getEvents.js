const fromApiResponseToEvents = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const events = data.map((event) => {
      return {
        //TODO: format date
        // date: event.start_date + " " + event.start_time,
        title: event.title,
        start: event.start_date + ' ' + event.start_time,
        end: event.end_date + ' ' + event.end_time,
        url: `https://destinoriocuarto.gob.ar/evento/${event.id}/${event.slug}?utm_source=calendar&utm_medium=referral`
      };
    });
    return events;
  }
  return [];
};

export function getEvents() {
  const apiURL = 'https://admin.visitariocuarto.gob.ar/api/v1/events';
  // const apiURL = "http://172.17.101.212/visita/public/api/v1/events";
  // const apiURL =
  //   "http://172.17.101.212/visita/public/api/v1/events?overpast=true";
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToEvents)
    .catch((error) => {
      console.error('Error: ', error);
    });
}
