import { createFileRoute } from "@tanstack/react-router";
import { File } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../../utils/api";
import FilterBar from "../../features/Files/FilterBar";
import FilteredFiles from "../../features/Files/FilteredFiles";

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

  const sortByCreationDate = files
    ? [...files].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    : [];

  return (
    <>
      {isFetched && (
        <div>
          <FilterBar />
          <FilteredFiles files={sortByCreationDate ?? []} />
        </div>
      )}
    </>
  );
}
