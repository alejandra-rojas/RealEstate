import { File } from "../../types/types";
import { Link } from "@tanstack/react-router";

function UpcomingEvents({ files }: { files: File[] }) {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const upcomingEvents = files
    .flatMap((file) =>
      file.events.map((event) => ({
        ...event,
        propertyName: file.propertyDetails.propertyName,
      }))
    )
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= nextWeek;
    });

  console.log(upcomingEvents);
  return (
    <article className="flex flex-col bg-[#eeeeee] w-[60%]  border border-gray-200">
      <div className="p-2 font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 border-b border-gray-400">
        <h3 className="text-almostblack">
          / Your Appointments in the Next 7 Days
        </h3>
      </div>
      <ul className="flex flex-wrap pl-1">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <Link to={`/files/${event.propertyId}`} key={event.eventId}>
              <li
                className={`flex flex-col p-4  ${index !== 0 ? "border-dotted border-l border-gray-400 " : ""} `}
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
