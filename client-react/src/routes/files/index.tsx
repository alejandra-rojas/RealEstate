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

  if (error) return "An error has occurred while fetching : " + error.message;

  const sortByCreationDate = files
    ? [...files].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    : [];

  const filteredFiles = sortByCreationDate.filter((file) => {
    const searchText = filterText.toLowerCase();

    return (
      file.propertyDetails.propertyName.toLowerCase().includes(searchText) ||
      file.propertyDetails.address.toLowerCase().includes(searchText) ||
      file.propertyDetails.description.toLowerCase().includes(searchText) ||
      file.seller.fullName.toLowerCase().includes(searchText) ||
      file.propertyLiasonAgent.name.toLowerCase().includes(searchText) ||
      String(file.salePrice).toLowerCase().includes(searchText) ||
      (file.buyer && file.buyer.fullName.toLowerCase().includes(searchText))
    );
  });

  return (
    <>
      {isFetched && (
        <div>
          <FilterBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />
          <FilteredFiles files={filteredFiles ?? []} />
        </div>
      )}
    </>
  );
}
