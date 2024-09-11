import { File, Status } from "../../types/types";
import { Link } from "@tanstack/react-router";

function OngoingTransactions({ files }: { files: File[] }) {
  const underOfferFiles = files.filter(
    (file) => file.status === Status.UnderOffer
  );

  const statusMessages = [
    "Waiting for seller",
    "Waiting for buyer",
    "Waiting for third party",
  ];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * statusMessages.length);
    return statusMessages[randomIndex];
  };

  return (
    <article className="w-[60%] bg-[#eeeeee] border border-gray-200 p-8 rounded-sm flex flex-col gap-4 ">
      <h3 className="font-rmono uppercase text-sm text-almostblack pb-1  border-b border-gray-400">
        / under offer transactions
      </h3>
      {underOfferFiles.length > 0 ? (
        <ul className="grid grid-cols-2 gap-y-8">
          {underOfferFiles.map((file) => (
            <Link to={`/files/${file.propertyId}`} key={file.propertyId}>
              <li key={file.propertyId} className="flex gap-4">
                <img
                  src={file.propertyDetails.photo}
                  alt={file.propertyDetails.propertyName}
                  className="w-24 h-24 object-cover aspect-square"
                />

                <div key={file.propertyId} className="flex gap-2">
                  <ul className="flex flex-col font-rmono text-xs text-gray-800 gap-1">
                    <div>
                      <li className="uppercase p-1 bg-white">
                        {getRandomMessage()}
                      </li>
                      {/* <li>{file.propertyDetails.propertyName}</li> */}
                    </div>
                    <div>
                      <li>${file.salePrice.toLocaleString()}</li>
                      {file.buyer && <li>Buyer: {file.buyer.fullName}</li>}
                      <li>Seller: {file.seller.fullName}</li>
                      <li>Agent: {file.propertyLiasonAgent.name}</li>
                    </div>
                  </ul>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No ongoing transactions under offer.</p>
      )}
    </article>
  );
}

export default OngoingTransactions;
