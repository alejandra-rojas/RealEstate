import { createFileRoute } from "@tanstack/react-router";
import { File } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../../utils/api";
import FilterTextInput from "../../features/Files/FilterTextInput";
import FilteredFiles from "../../features/Files/FilteredFiles";
import { useState } from "react";
import {
  filterFiles,
  sortByCreationDate,
} from "../../features/Files/utils/filterUtils";
import FilterPriceRange from "../../features/Files/FilterPriceRange";
import FilterCheckboxes from "../../features/Files/FilterCheckboxes";

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
  const [minPrice, setMinPrice] = useState<number | null>(0);
  const [maxPrice, setMaxPrice] = useState<number | null>(20000000);

  if (error) return "An error has occurred while fetching : " + error.message;

  const sortedFiles = files ? sortByCreationDate(files) : [];
  const filteredFiles = filterFiles(
    sortedFiles,
    filterText,
    minPrice,
    maxPrice
  );

  return (
    <>
      {isFetched && (
        <section className="flex flex-col gap-6">
          <div className="w-full inline-flex rounded-lg border border-gray-100 justify-between items-end">
            <FilterTextInput
              filterText={filterText}
              onFilterTextChange={setFilterText}
            />
            <FilterPriceRange
              minPrice={minPrice}
              maxPrice={maxPrice}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
            />
          </div>
          <div className="flex gap-8">
            <FilterCheckboxes />
            <FilteredFiles files={filteredFiles ?? []} />
          </div>
        </section>
      )}
    </>
  );
}
