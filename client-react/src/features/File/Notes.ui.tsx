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
    <article className="w-3/4">
      <div className="flex justify-between pb-1 mb-4 border-b border-gray-400">
        <h3 className="font-rmono uppercase text-sm text-almostblack ">
          Notes
        </h3>
        <button onClick={handleAddNoteClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-5 hover:text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      {isAddingNote && <AddNewNote onClose={handleCloseForm} id={id} />}
      {notes.length === 0 ? (
        <p className="font-rmono text-xs">No notes on this file</p>
      ) : (
        <ul className="flex flex-col gap-4 pr-5">
          {notes
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((note) => (
              <li key={note.noteId} className="flex flex-col gap-1">
                <p className="leading-tight text-md font-medium">
                  {note.description}
                </p>
                <p className="font-rmono uppercase text-xs ">
                  {note.author} - {new Date(note.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
        </ul>
      )}
    </article>
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
    }
  };

  return (
    <div className="flex flex-col gap-2 pb-4">
      <input
        type="text"
        placeholder="Enter note description"
        value={newNoteDescription}
        onChange={(e) => setNewNoteDescription(e.target.value)}
        className={`p-2.5 border w-full`}
      />
      <div className="flex items-center">
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button onClick={handleAddNote}>
          <span className="font-rmono uppercase text-sm text-almostblack border border-gray-300 hover:bg-red-200 px-2 py-1 cursor-default">
            Save
          </span>
        </button>
      </div>
    </div>
  );
}
