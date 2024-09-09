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
        <section>
          <div className="max-w-7xl px-4 py-6 flex justify-between items-end">
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
          <FilteredFiles files={filteredFiles ?? []} />
        </section>
      )}
    </>
  );
}
