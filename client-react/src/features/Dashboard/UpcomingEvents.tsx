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
    <article className="flex flex-col gap-4 bg-yellow-100  border-l-4 border-yellow-500 p-4">
      <div className="font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 border-b border-yellow-500">
        <h3 className="text-yellow-500">/ Upcomming appointments</h3>
        {/* <button className="uppercase cursor-pointer underline hover:font-medium"></button> */}
      </div>
      <ul className="flex flex-wrap gap-7 pl-3">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <Link to={`/files/${event.propertyId}`}>
              <li
                key={event.eventId}
                className="flex flex-col gap-1 pr-6 border-r border-yellow-500"
              >
                <p className="font-rmono uppercase text-sm font-semibold">
                  {new Date(event.date).toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <div>
                  <p className="font-normal"> {event.description}.</p>
                  <p className="text-xs cursor-pointer">{event.propertyName}</p>
                </div>
              </li>
            </Link>
          ))
        ) : (
          <li>There are no upcoming events on your calendar</li>
        )}
      </ul>
    </article>
  );
}

export default UpcomingEvents;
