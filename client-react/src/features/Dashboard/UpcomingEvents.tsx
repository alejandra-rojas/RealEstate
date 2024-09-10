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
    <div className="flex flex-col gap-4 ">
      <h2 className="font-rmono  text-lg text-[#999999] border-b border-[#CFCFCF]">
        Your upcoming appointments
      </h2>
      <ul className="flex flex-col gap-1">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <li key={event.eventId}>
              <strong>
                {new Date(event.date).toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </strong>
              <span> {event.description}.</span>{" "}
              <span className="text-sm">
                <Link to={`/files/${event.propertyId}`}>
                  <span>Property:</span> <em>{event.propertyName}</em>
                </Link>
              </span>
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
