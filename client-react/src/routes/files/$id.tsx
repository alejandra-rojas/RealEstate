import { createFileRoute } from "@tanstack/react-router";
import { File, Status } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFileById } from "../../utils/api";

export const Route = createFileRoute("/files/$id")({
  component: SingleFile,
});

function SingleFile() {
  const { id } = Route.useParams();

  const {
    data: file,
    error,
    isLoading,
    isFetched,
  } = useQuery<File>({
    queryKey: ["property", id],
    queryFn: () => fetchFileById(id),
  });

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
          <p>Status: {Status[file!.status]}</p>
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
