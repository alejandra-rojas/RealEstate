import { Note } from "../../types/types";

function Notes({ notes }: { notes: Note[] }) {
  return (
    <div>
      <h3>Property Notes</h3>
      {notes.length === 0 ? (
        <p>No notes available for this property.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.noteId}>
              <p>
                <strong>Note:</strong> {note.description}
              </p>
              <p>
                {note.author} - {new Date(note.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notes;
