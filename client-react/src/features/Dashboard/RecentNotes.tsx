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
    <section className="bg-[#e7e7e7] py-4 px-6 rounded-xl flex flex-col gap-4 ">
      <h2 className="font-rmono text-xl border-b border-[#CFCFCF]">
        Latest notes on files
      </h2>
      <ul className="flex flex-col gap-3 ">
        {latestNotes.length > 0 ? (
          latestNotes.map((note) => (
            <li key={note.noteId} className="pb-2 border-b border-[#CFCFCF]">
              <p className="capitalize text-sm text-black">
                {note.description}
              </p>
              <p className="font-rmono text-xs text-gray-800">
                <Link to={`/files/${note.propertyId}`}>
                  {note.propertyName}{" "}
                </Link>
                file - {new Date(note.createdAt).toLocaleString()}{" "}
                {note.author.split(" ")[0]}
              </p>
            </li>
          ))
        ) : (
          <p>No recent notes available</p>
        )}
      </ul>
    </section>
  );
}

export default RecentNotes;
