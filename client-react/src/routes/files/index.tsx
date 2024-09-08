import { createFileRoute, Link } from "@tanstack/react-router";
import { File, Status } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../../utils/api";

export const Route = createFileRoute("/files/")({
  component: Files,
});

function Files() {
  const {
    error,
    data: files,
    isFetched,
  } = useQuery<File[]>({
    queryKey: ["files"],
    queryFn: fetchFiles,
  });

  console.log(files);

  if (error) return "An error has occurred while fetching : " + error.message;

  return (
    <>
      {isFetched && (
        <div>
          <FilterableFiles files={files ?? []} />
        </div>
      )}
    </>
  );
}

function FilterableFiles({ files }: { files: File[] }) {
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

function FileCard({ file }: { file: File }) {
  return (
    <Link to={`/files/${file.propertyId}`}>
      <div>
        <h3>{file.propertyDetails.propertyName}</h3>
        <p>Price: ${file.salePrice}</p>
        <p>Status: {Status[file.status]}</p>
        <p>Seller: {file.seller.fullName}</p>
        <p>Agent: {file.propertyLiasonAgent.name} sqm</p>
      </div>
    </Link>
  );
}
