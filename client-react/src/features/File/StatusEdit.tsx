import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateStatus } from "../../utils/api";
import { Status } from "../../types/types";
import { toast } from "react-toastify";

interface StatusEditProps {
  id: string;
  status: number;
}

export default function StatusEdit({ id, status }: StatusEditProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newStatus, setNewStatus] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newStatus: number) => updateStatus(id, newStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["property", id],
      });
      toast.success("Status has been updated", {
        position: "top-right",
        theme: "dark",
      });
    },
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      const statusKey = Status[status];
      setNewStatus(statusKey || null);
    }
  };

  const handleSaveClick = () => {
    const statusValue = Status[newStatus as keyof typeof Status];
    if (newStatus && statusValue !== status) {
      mutation.mutate(statusValue);
    }

    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex gap-2">
        <div>
          {isEditing ? (
            <select
              value={newStatus || ""}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              {Object.keys(Status)
                .filter((key) => isNaN(Number(key)))
                .map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
            </select>
          ) : (
            <span className="font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 border border-gray-400 px-2 py-1 cursor-default">
              {Status[status]}
            </span>
          )}
        </div>
        {isEditing && (
          <button
            onClick={handleSaveClick}
            disabled={mutation.isPending}
            className="mt-1"
          >
            {mutation.isPending ? (
              "Saving..."
            ) : (
              <span className="font-rmono uppercase text-sm text-almostblack border border-gray-300 hover:bg-red-200 px-2 py-1 cursor-default">
                Save
              </span>
            )}
          </button>
        )}
        <button onClick={handleEditClick}>
          {isEditing ? (
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
          ) : (
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
