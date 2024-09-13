import { Link } from "@tanstack/react-router";
import { File } from "../../types/types";

interface Anotation {
  noteId: number;
  createdAt: string;
  description: string;
  propertyId: number;
  propertyName: string;
  author: string;
}

function RecentNotes({ files }: { files: File[] }) {
  const allNotes: Anotation[] = files.flatMap((file) =>
    (file.notes || []).map((note) => ({
      ...note,
      propertyId: file.propertyDetails.propertyId,
      propertyName: file.propertyDetails.propertyName,
    }))
  );
  const sortedNotes = allNotes.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const latestNotes = sortedNotes.slice(0, 5);

  return (
    <article className="w-[40%] bg-[#eeeeee] border border-gray-200 p-8 rounded-sm flex flex-col gap-4 ">
      <h3 className="font-rmono uppercase text-sm text-almostblack pb-1  border-b border-gray-400">
        / Latest notes on files
      </h3>

      {latestNotes.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {latestNotes.map((note) => (
            <li
              key={note.noteId}
              className="flex flex-col gap-1 pb-3 border-b border-dotted border-gray-400"
            >
              <Link to={`/files/${note.propertyId}`}>
                <p className="w-[85%] leading-snug text-sm font-medium pt-1">
                  {note.description}
                </p>
                <div className="flex gap-1 font-normal font-rmono text-[0.7rem] uppercase">
                  <p>{new Date(note.createdAt).toLocaleString()}</p>
                  <p>{note.author.split(" ")[0]}</p>
                  <p>-{note.propertyName}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent notes available</p>
      )}
    </article>
  );
}

export default RecentNotes;
