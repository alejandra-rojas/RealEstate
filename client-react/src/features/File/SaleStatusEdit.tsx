import { useState } from "react";
import { SaleStatus } from "../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSaleStatus } from "../../utils/api";
import { toast } from "react-toastify";

interface StatusEditProps {
  id: string;
  status: SaleStatus;
}

export default function SaleStatusEdit({ id, status }: StatusEditProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newStatus, setNewStatus] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const statusLabels: { [key in SaleStatus]: string } = {
    [SaleStatus.W4Seller]: "Waiting for Seller",
    [SaleStatus.W4Buyer]: "Waiting for Buyer",
    [SaleStatus.W4ThirdParty]: "Waiting for Third Party",
    [SaleStatus.MettingScheduled]: "Meeting Scheduled",
  };

  const statusText = statusLabels[status] || "Unknown";

  const mutation = useMutation({
    mutationFn: (newStatus: number) => updateSaleStatus(id, newStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["property", id],
      });
      toast.success("Sale status has been updated", {
        position: "top-right",
        theme: "dark",
      });
    },
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      const statusKey = SaleStatus[status];
      setNewStatus(statusKey || null);
    }
  };

  const handleSaveClick = () => {
    if (newStatus !== null && newStatus !== undefined) {
      const numericStatus = parseInt(newStatus);
      mutation.mutate(numericStatus);
    } else {
      console.error("newStatus is null or undefined");
    }

    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex gap-2">
        <div>
          {isEditing ? (
            <select
              className="text-xs"
              value={newStatus || ""}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              {Object.entries(statusLabels).map(([key, label]) => (
                <option key={key} value={key} className="text-xs">
                  {label}
                </option>
              ))}
            </select>
          ) : (
            <button
              className="font-rmono uppercase p-1 bg-white text-sm py-1 pl-1 pr-3"
              onClick={handleEditClick}
            >
              {statusText}
            </button>
          )}
        </div>
        {isEditing && (
          <button
            className="mt-1"
            onClick={handleSaveClick}
            disabled={mutation.isPending}
          >
            <span className="font-rmono uppercase text-sm text-almostblack border border-gray-300 hover:bg-red-200 px-2 py-1 cursor-default">
              Save
            </span>
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
            <div></div>
          )}
        </button>
      </div>
    </div>
  );
}
