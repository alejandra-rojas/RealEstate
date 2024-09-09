import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateStatus } from "../utils/api";
import { Status } from "../types/types";

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
      {" "}
      <div>
        <p>Status: </p>
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
          <span>{Status[status]}</span>
        )}
      </div>
      <button onClick={handleEditClick}>{isEditing ? "Cancel" : "Edit"}</button>
      {isEditing && (
        <button onClick={handleSaveClick} disabled={mutation.isPending}>
          {mutation.isPending ? "Saving..." : "Save"}
        </button>
      )}
    </div>
  );
}
