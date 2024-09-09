import { createFileRoute } from "@tanstack/react-router";
import { File } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../../utils/api";
import FilterBar from "../../features/Files/FilterBar";
import FilteredFiles from "../../features/Files/FilteredFiles";
import { useState } from "react";

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

  const [filterText, setFilterText] = useState<string>("");

  console.log(filterText);

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
          <FilterBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />
          <FilteredFiles files={sortByCreationDate ?? []} />
        </div>
      )}
    </>
  );
}
