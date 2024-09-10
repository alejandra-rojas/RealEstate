import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Note } from "../../types/types";
import { addNote } from "../../utils/api";
import { toast } from "react-toastify";

function Notes({ notes, id }: { notes: Note[]; id: string }) {
  const [isAddingNote, setIsAddingNote] = useState(false);

  const handleAddNoteClick = () => {
    setIsAddingNote(true);
  };

  const handleCloseForm = () => {
    setIsAddingNote(false);
  };

  return (
    <div>
      <h3>Property Notes</h3>
      <button onClick={handleAddNoteClick}>Add Note</button>
      {isAddingNote && <AddNewNote onClose={handleCloseForm} id={id} />}
      {notes.length === 0 ? (
        <p>No notes available for this property.</p>
      ) : (
        <ul>
          {notes
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((note) => (
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

function AddNewNote({ onClose, id }: { onClose: () => void; id: string }) {
  const [newNoteDescription, setNewNoteDescription] = useState<string>("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newNote: string) => addNote(id, newNote),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["property", id],
      });
      onClose();
      toast.success("Note added to file", {
        position: "top-right",
        theme: "dark",
      });
    },
  });

  const handleAddNote = () => {
    if (newNoteDescription.trim()) {
      const newNote = newNoteDescription;
      mutation.mutate(newNote);
      setNewNoteDescription("");
      console.log(newNote);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter note description"
        value={newNoteDescription}
        onChange={(e) => setNewNoteDescription(e.target.value)}
        className={`p-2.5 w-3/4 border rounded-[6px] `}
      />
      <button onClick={handleAddNote}>Save Note</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
