import { File, Status } from "../../types/types";
import { Link } from "@tanstack/react-router";

function OngoingTransactions({ files }: { files: File[] }) {
  const underOfferFiles = files.filter(
    (file) => file.status === Status.UnderOffer
  );

  console.log(underOfferFiles);
  return (
    <section className="bg-[#e7e7e7] py-4 px-6 rounded-xl flex flex-col gap-4 w-1/2">
      <h2 className="font-rmono text-xl border-b border-[#CFCFCF]">
        Ongoing Transactions
      </h2>
      {underOfferFiles.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {underOfferFiles.map((file) => (
            <li>
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
                    <li>Buyer: {file.buyer.fullName}</li>
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
    </section>
  );
}

export default OngoingTransactions;
