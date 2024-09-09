interface Event {
  date: string;
  description: string;
}

function Events({ events }: { events: Event[] }) {
  return (
    <div>
      <h4>Events</h4>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <p>Date: {new Date(event.date).toLocaleString()}</p>
            <p>Details: {event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
