import { Link } from "@tanstack/react-router";
import { File, Status } from "../../types/types";

export default function FileCard({ file }: { file: File }) {
  return (
    <Link to={`/files/${file.propertyId}`}>
      <li className="flex items-center border-b border-almostblack py-1.5 hover:bg-accent">
        {/* <img
          src={file.propertyDetails.photo}
          alt={file.propertyDetails.description}
          className="w-52"
        /> */}
        <p className="basis-1/6 font-rmono font-normal text-sm">
          ${file.salePrice.toLocaleString()}
        </p>
        <p className="basis-2/3 text-2xl">
          {file.propertyDetails.propertyName}
        </p>
        <p className="basis-1/6 font-rmono uppercase font-normal text-xs ">
          <span className="inline-block border border-gray-300 px-2 py-1">
            {Status[file.status]}
          </span>
        </p>
      </li>
    </Link>
  );
}
