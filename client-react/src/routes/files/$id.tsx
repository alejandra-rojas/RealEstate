import { createFileRoute } from "@tanstack/react-router";
import { File } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFileById } from "../../utils/api";
import StatusEdit from "../../features/File/StatusEdit";
import Seller from "../../features/File/Seller.ui";
import Agent from "../../features/File/Agent.ui";
import Buyer from "../../features/File/Buyer.ui";
import Events from "../../features/File/Events.ui";
import Notes from "../../features/File/Notes.ui";

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

  console.log(file);

  return (
    <>
      {isFetched && file && (
        <div>
          <h3>{file.propertyDetails.propertyName}</h3>
          <StatusEdit id={id} status={file.status} />
          <p>Price: ${file!.salePrice}</p>
          <p>Commision: {file!.agreedCommission}%</p>

          <Agent agent={file.propertyLiasonAgent} />
          <Seller seller={file.seller} />

          {file!.buyer && <Buyer buyer={file.buyer} />}

          {file.events && file.events.length > 0 && (
            <Events events={file.events} />
          )}

          <Notes notes={file.notes} id={id} />
        </div>
      )}
    </>
  );
}
