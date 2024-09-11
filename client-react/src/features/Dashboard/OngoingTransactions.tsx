import { File, Status } from "../../types/types";
import { Link } from "@tanstack/react-router";

function OngoingTransactions({ files }: { files: File[] }) {
  const underOfferFiles = files.filter(
    (file) => file.status === Status.UnderOffer
  );

  console.log(underOfferFiles);
  return (
    <article className="w-1/2 bg-[#eeeeee] border border-gray-200 p-8 rounded-sm flex flex-col gap-4 ">
      <h3 className="font-rmono uppercase text-sm text-almostblack pb-1  border-b border-gray-400">
        / Ongoing transactions
      </h3>
      {underOfferFiles.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {underOfferFiles.map((file) => (
            <li key={file.propertyId}>
              <div className="mb-1 border-b border-[#CFCFCF]">
                status: awaiting bank
              </div>
              <div key={file.propertyId} className="flex gap-2">
                <Link to={`/files/${file.propertyId}`}>
                  <img
                    src={file.propertyDetails.photo}
                    alt={file.propertyDetails.propertyName}
                    className="w-20 "
                  />
                </Link>
                <div>
                  <ul className="flex flex-col font-rmono text-xs text-gray-800">
                    <li>${file.salePrice.toLocaleString()}</li>
                    {file.buyer && <li>Buyer: {file.buyer.fullName}</li>}
                    <li>Seller: {file.seller.fullName}</li>
                    <li>
                      Agent: {file.propertyLiasonAgent.name.split(" ")[0]}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No ongoing transactions under offer.</p>
      )}
    </article>
  );
}

export default OngoingTransactions;
