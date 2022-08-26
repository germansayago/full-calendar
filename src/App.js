import Calendar from "./components/Calendar";
import Spinner from "./components/Spinner";
import { useEvents } from "./hooks/useEvents";

// const otherEvents = [{}];

import "./styles/app.scss";

function App() {
  const { loading, events } = useEvents();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <main id="#calendar-container">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <Calendar events={events} />
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default App;
