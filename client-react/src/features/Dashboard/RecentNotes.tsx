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
    <article className="w-1/2 bg-[#eeeeee] border border-gray-200 p-8 rounded-sm flex flex-col gap-4 ">
      <h3 className="font-rmono uppercase text-sm text-almostblack pb-1  border-b border-gray-400">
        / Latest notes on files
      </h3>

      {latestNotes.length > 0 ? (
        latestNotes.map((note) => (
          <ul className="w-[85%]">
            <Link to={`/files/${note.propertyId}`}>
              <li key={note.noteId} className="flex flex-col gap-1">
                <p className="leading-tight text-md ">{note.description}</p>
                <div className="flex gap-1 font-rmono text-sm">
                  <p className="uppercase font-normal">{note.propertyName} -</p>
                  <p className="">
                    {new Date(note.createdAt).toLocaleString()}
                  </p>
                  <p className="">{note.author.split(" ")[0]}</p>
                </div>
              </li>
            </Link>
          </ul>
        ))
      ) : (
        <p>No recent notes available</p>
      )}
    </article>
  );
}

export default RecentNotes;
