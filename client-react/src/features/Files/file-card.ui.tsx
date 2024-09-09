import { Link } from "@tanstack/react-router";
import { File, Status } from "../../types/types";

export default function FileCard({ file }: { file: File }) {
  return (
    <Link to={`/files/${file.propertyId}`}>
      <div>
        <h3>{file.propertyDetails.propertyName}</h3>
        <p>Price: ${file.salePrice}</p>
        <p>Status: {Status[file.status]}</p>
        <p>Seller: {file.seller.fullName}</p>
        <p>Agent: {file.propertyLiasonAgent.name}</p>
      </div>
    </Link>
  );
}
