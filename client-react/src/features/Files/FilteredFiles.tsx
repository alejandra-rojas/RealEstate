import { File } from "../../types/types";
import FileCard from "./file-card.ui";

function FilteredFiles({ files }: { files: File[] }) {
  return (
    <>
      <div className="flex flex-col  flex-grow">
        <div className="font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 border-b border-almostblack">
          <h4 className="basis-1/6">/Price</h4>
          <h4 className="basis-2/3">/Name</h4>
          <h4 className="basis-1/6">/Status</h4>
        </div>
        <ul>
          {files.map((file) => {
            return <FileCard key={file.propertyId} file={file} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default FilteredFiles;
