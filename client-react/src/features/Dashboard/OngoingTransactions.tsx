import { File } from "../../types/types";
import { Link } from "@tanstack/react-router";

function OngoingTransactions({ files }: { files: File[] }) {
  const statusUnderOffer = 1;
  const underOfferFiles = files.filter(
    (file) => file.status === statusUnderOffer
  );
  return (
    <article>
      <h2>Ongoing Transactions</h2>
      {underOfferFiles.length > 0 ? (
        <ul>
          {underOfferFiles.map((file) => (
            <li key={file.propertyId}>
              <Link to={`/files/${file.propertyId}`}>
                {file.propertyDetails.propertyName}
              </Link>
              - Seller: {file.seller.fullName} - Buyer: {file.buyer.fullName}
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
