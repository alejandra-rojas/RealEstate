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
    <div>
      <h4>Latest notes added to files</h4>
      <ul>
        {latestNotes.length > 0 ? (
          latestNotes.map((note) => (
            <li key={note.noteId}>
              <p>
                Property:{" "}
                <Link to={`/files/${note.propertyId}`}>
                  {note.propertyName}{" "}
                </Link>
                - {new Date(note.createdAt).toLocaleString()} by {note.author}
              </p>
              <p>Note: {note.description}</p>
            </li>
          ))
        ) : (
          <p>No recent notes available</p>
        )}
      </ul>
    </div>
  );
}

export default RecentNotes;
