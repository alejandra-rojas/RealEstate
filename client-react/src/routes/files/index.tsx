import { createFileRoute } from "@tanstack/react-router";
import { File } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../../utils/api";
import FilterTextInput from "../../features/Files/FilterTextInput";
import FilteredFiles from "../../features/Files/FilteredFiles";
import { useState } from "react";
import {
  filterFilesByText,
  sortByCreationDate,
} from "../../features/Files/utils/filterUtils";

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

  if (error) return "An error has occurred while fetching : " + error.message;

  const sortedFiles = files ? sortByCreationDate(files) : [];
  const filteredFiles = filterFilesByText(sortedFiles, filterText);

  return (
    <>
      {isFetched && (
        <div>
          <FilterTextInput
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />
          <FilteredFiles files={filteredFiles ?? []} />
        </div>
      )}
    </>
  );
}
