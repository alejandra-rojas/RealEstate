import { File } from "../../types/types";
import { Link } from "@tanstack/react-router";

function UpcomingEvents({ files }: { files: File[] }) {
  const upcomingEvents = files
    .flatMap((file) =>
      file.events.map((event) => ({
        ...event,
        propertyName: file.propertyDetails.propertyName,
      }))
    )
    .filter((event) => new Date(event.date) > new Date());

  console.log(upcomingEvents);
  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <li key={event.eventId}>
              <strong>{new Date(event.date).toLocaleDateString()}</strong>{" "}
              {event.description} for{" "}
              <Link to={`/files/${event.propertyId}`}>
                <em>{event.propertyName}</em>
              </Link>
            </li>
          ))
        ) : (
          <li>There are no upcoming events on your calendar</li>
        )}
      </ul>
    </div>
  );
}

export default UpcomingEvents;
