import { createFileRoute } from "@tanstack/react-router";
import { File } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFileById } from "../../utils/api";
import StatusEdit from "../../features/File/StatusEdit";
import Seller from "../../features/File/Seller.ui";
import Buyer from "../../features/File/Buyer.ui";
import Events from "../../features/File/Events.ui";
import Notes from "../../features/File/Notes.ui";
import SellerDocs from "../../features/File/SellerDocs.ui";

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
        <section
          className="bg-[#eeeeee] border border-gray-200 mt-6 py-6 px-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 100% 100%, 0 100%)",
          }}
        >
          <div className="font-rmono uppercase text-xs text-almostblack flex justify-between pb-1 mb-6 border-b border-almostblack">
            <p>/ PROPERTY ID: 102{file.propertyId}</p>
            <p>{new Date(file.createdAt).toLocaleString()}</p>
          </div>

          <div className="flex justify-between pb-4 mb-4 border-b border-gray-400">
            <div className="flex font-rmono text-xl items-center gap-4">
              <img
                src={file.propertyLiasonAgent.photo}
                alt={file.propertyLiasonAgent.name}
                className="square h-12"
              />
              <div>
                <h3 className="font-rmono text-xl font-semibold">
                  {file.propertyDetails.propertyName}
                </h3>
                <p>
                  ${file!.salePrice.toLocaleString()} - Commision:{" "}
                  {file!.agreedCommission}%{" "}
                </p>
              </div>
              <p></p>
            </div>
            <StatusEdit id={id} status={file.status} />
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-6 w-1/3">
              <img
                src={file.propertyDetails.photo}
                alt={file.propertyDetails.propertyName}
              />
              <div>
                <p className="font-rmono uppercase text-xs text-almostblack flex justify-between pb-1 mb-2 border-b border-gray-400">
                  {file.propertyDetails.description}
                </p>
                <ul className="font-rmono text-xs">
                  <li className="font-semibold">
                    {file.propertyDetails.address}
                  </li>
                  <li>
                    Construction:{" "}
                    {file.propertyDetails.constructionSizeInSquareMeters} sqm
                  </li>
                  <li>
                    Land: {file.propertyDetails.landSizeInSquareMeters}sqm
                  </li>
                  <li>Number of rooms: {file.propertyDetails.numberOfRooms}</li>
                </ul>
              </div>
              <Seller seller={file.seller} />
              {file!.buyer && <Buyer buyer={file.buyer} />}
            </div>

            <div className="flex flex-col w-2/3 gap-4">
              <SellerDocs />
              <div className="flex gap-4">
                <Notes notes={file.notes} id={id} />
                {file.events && file.events.length > 0 && (
                  <Events events={file.events} />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
