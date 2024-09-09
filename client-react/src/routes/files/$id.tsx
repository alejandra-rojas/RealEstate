import { createFileRoute } from "@tanstack/react-router";
import { File, Status } from "../../types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchFileById, updateStatus } from "../../utils/api";
import { useState } from "react";

export const Route = createFileRoute("/files/$id")({
  component: SingleFile,
});

function SingleFile() {
  const { id } = Route.useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [newStatus, setNewStatus] = useState<string | null>(null);

  const {
    data: file,
    error,
    isLoading,
    isFetched,
  } = useQuery<File>({
    queryKey: ["property", id],
    queryFn: () => fetchFileById(id),
  });

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
      const statusKey = Status[file!.status];
      setNewStatus(statusKey || null);
    }
  };

  const handleSaveClick = () => {
    const statusValue = Status[newStatus as keyof typeof Status];
    if (newStatus && statusValue !== file?.status) {
      mutation.mutate(statusValue);
    }

    setIsEditing(false);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching the property details.</p>;
  }

  return (
    <>
      {isFetched && (
        <div>
          <h3>{file!.propertyDetails.propertyName}</h3>

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
              <span>{Status[file!.status]}</span>
            )}
          </div>

          <button onClick={handleEditClick}>
            {isEditing ? "Cancel" : "Edit"}
          </button>

          {isEditing && (
            <button onClick={handleSaveClick} disabled={mutation.isPending}>
              {mutation.isPending ? "Saving..." : "Save"}
            </button>
          )}

          <p>Price: ${file!.salePrice}</p>
          <p>Commision: {file!.agreedCommission}%</p>
          <p>Agent details</p>
          <img
            src={file!.propertyLiasonAgent.photo}
            alt={file!.propertyLiasonAgent.name}
            className="square h-10"
          />
          <p>{file!.propertyLiasonAgent.name}</p>
          <p>{file!.propertyLiasonAgent.email}</p>
          <p>Seller details</p>
          <p>{file!.seller.fullName}</p>
          <p>{file!.seller.primaryNumber}</p>

          {file!.buyer && (
            <>
              <p>Buyer details</p>
              <p>{file!.buyer.fullName}</p>
              <p>{file!.buyer.primaryNumber}</p>
            </>
          )}

          {file!.events && file!.events.length > 0 && (
            <>
              <p>Events</p>
              <ul>
                {file!.events.map((event, index) => (
                  <li key={index}>
                    <p>Date: {new Date(event.date).toLocaleString()}</p>
                    <p>Details: {event.description}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}
