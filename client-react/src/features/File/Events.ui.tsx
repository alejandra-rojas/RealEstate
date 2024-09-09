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
      <h4>Upcoming Events</h4>
      <ul>
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <li key={index}>
              <p>
                {new Date(event.date).toLocaleDateString()}: {event.description}
              </p>
            </li>
          ))
        ) : (
          <p>No upcoming events</p>
        )}
      </ul>

      <div>Add Event Button</div>

      <h4>Past Events</h4>
      <ul>
        {pastEvents.length > 0 ? (
          pastEvents.map((event, index) => (
            <li key={index}>
              <p>
                {new Date(event.date).toLocaleDateString()}: {event.description}
              </p>
            </li>
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
}

export default Events;
