interface Event {
  date: string;
  description: string;
}

function Events({ events }: { events: Event[] }) {
  const todaysDate = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= todaysDate
  );

  const pastEvents = events.filter(
    (event) => new Date(event.date) < todaysDate
  );

  return (
    <div>
      <div className="flex justify-between pb-1 mb-4 border-b border-gray-400">
        <h3 className="font-rmono uppercase text-sm text-almostblack ">
          Events
        </h3>
        <button>
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
        <ul className="flex flex-col gap-2 pb-2 mb-2 border-b border-gray-400">
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

        <p className="text-xs">Past events:</p>
        <ul className="flex flex-col gap-1">
          {pastEvents.length > 0 ? (
            pastEvents.map((event, index) => (
              <li key={index} className="font-rmono uppercase text-xs">
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
