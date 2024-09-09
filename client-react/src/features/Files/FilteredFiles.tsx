import { File } from "../../types/types";
import FileCard from "./file-card.ui";

function FilteredFiles({ files }: { files: File[] }) {
  return (
    <>
      <div className="flex flex-col gap-4 border">
        {files.map((file) => {
          return <FileCard key={file.propertyId} file={file} />;
        })}
      </div>
    </>
  );
}

export default FilteredFiles;
