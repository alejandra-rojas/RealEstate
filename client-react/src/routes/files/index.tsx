import { createFileRoute } from "@tanstack/react-router";
import { File } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../../utils/api";
import FilteredFiles from "../../features/Files/FilteredFiles";
import { useState } from "react";
import {
  filterFiles,
  sortByCreationDate,
} from "../../features/Files/utils/filterUtils";
import FilterSidebar from "../../features/Files/FilterSidebar";

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

  const initialFilterState = {
    filterText: "",
    minPrice: 0,
    maxPrice: 20000000,
  };

  const [filterText, setFilterText] = useState<string>(
    initialFilterState.filterText
  );
  const [minPrice, setMinPrice] = useState<number | null>(
    initialFilterState.minPrice
  );
  const [maxPrice, setMaxPrice] = useState<number | null>(
    initialFilterState.maxPrice
  );

  const handleClearFilters = () => {
    setFilterText(initialFilterState.filterText);
    setMinPrice(initialFilterState.minPrice);
    setMaxPrice(initialFilterState.maxPrice);
  };

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
            Something else
          </div>
          <div className="flex gap-8">
            <FilterSidebar
              filterText={filterText}
              onFilterTextChange={setFilterText}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
              onClearFilters={handleClearFilters}
            />
            <FilteredFiles files={filteredFiles ?? []} />
          </div>
        </section>
      )}
    </>
  );
}
