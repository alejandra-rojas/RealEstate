import { useState } from "react";

interface Event {
  date: string;
  description: string;
}

function Events({ events }: { events: Event[] }) {
  const [isDateInputVisible, setIsDateInputVisible] = useState(false);
  const todaysDate = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= todaysDate
  );

  const pastEvents = events.filter(
    (event) => new Date(event.date) < todaysDate
  );

  const handleButtonClick = () => {
    setIsDateInputVisible((prev) => !prev);
  };

  return (
    <div className="w-1/3">
      <div className="flex justify-between pb-1  border-b border-gray-400">
        <h3 className="font-rmono uppercase text-sm text-almostblack ">
          Events
        </h3>
        <button onClick={handleButtonClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-5 hover:text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div>
        {isDateInputVisible && (
          <div className="mb-4">
            <label
              htmlFor="eventDate"
              className="font-rmono text-xs uppercase pl-1"
            >
              select a date:
            </label>
            <input
              type="date"
              id="eventDate"
              className="block w-full py-2 border border-gray-300 rounded-sm shadow-sm text-sm"
            />
          </div>
        )}
        <ul className="flex flex-col gap-2 pb-2 mb-2 mt-4 border-b border-gray-400">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <li
                key={index}
                className="font-rmono uppercase text-xs font-medium"
              >
                <p>{event.description}</p>
                <p>{new Date(event.date).toLocaleString()}</p>
              </li>
            ))
          ) : (
            <p className="text-xs">No upcoming events</p>
          )}
        </ul>

        <p className="text-xs uppercase py-0.5 mb-1 border-b border-gray-400">
          Past events:
        </p>
        <ul className="flex flex-col pt-0.5 gap-1 w-[95%]">
          {pastEvents.length > 0 ? (
            pastEvents.map((event, index) => (
              <li key={index} className="text-xs py-0.5">
                <p>{event.description}</p>
                <p>{new Date(event.date).toLocaleDateString()}</p>
              </li>
            ))
          ) : (
            <p className="text-xs">None</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Events;
