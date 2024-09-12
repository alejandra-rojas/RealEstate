import { createFileRoute, Link } from "@tanstack/react-router";
import { File } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../../utils/api";
import FilteredFiles from "../../features/Files/FilteredFiles";
import { useEffect, useState } from "react";
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

  console.log(files);

  const initialFilterState = {
    filterText: "",
    minPrice: 320000,
    maxPrice: 1000000,
    statuses: { active: true, underOffer: true, inactive: true, sold: true },
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
  const [statuses, setStatuses] = useState(initialFilterState.statuses);

  useEffect(() => {
    if (isFetched && files) {
      const salePrices = files.map((file) => file.salePrice);
      const minPriceCalculated = Math.min(...salePrices);
      const maxPriceCalculated = Math.max(...salePrices);

      setMinPrice(minPriceCalculated);
      setMaxPrice(maxPriceCalculated);
    }
  }, [isFetched, files]);

  const handleClearFilters = () => {
    setFilterText(initialFilterState.filterText);
    setMinPrice(initialFilterState.minPrice);
    setMaxPrice(initialFilterState.maxPrice);
    setStatuses(initialFilterState.statuses);
  };

  const handleStatusChange = (statusKey: keyof typeof statuses) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [statusKey]: !prevStatuses[statusKey],
    }));
  };

  if (error) return "An error has occurred while fetching : " + error.message;

  const sortedFiles = files ? sortByCreationDate(files) : [];
  const filteredFiles = filterFiles(
    sortedFiles,
    filterText,
    minPrice,
    maxPrice,
    statuses
  );

  return (
    <>
      {isFetched && (
        <section className="flex flex-col gap-4">
          <div className="flex justify-between py-3 items-center my-2">
            <h2 className="font-rmono uppercase text-4xl text-gray-200">
              Properties Portfolio
            </h2>
            <div className="inline-flex rounded-md border border-gray-100 bg-gray-200 items-center">
              <Link to={`/files/new`}>
                <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-900 hover:text-gray-700 focus:relative dark:text-gray-400 dark:hover:text-gray-200 hover:dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                    />
                  </svg>
                  Add Property
                </button>
              </Link>
            </div>
          </div>

          <div className="flex gap-8">
            <FilterSidebar
              filterText={filterText}
              onFilterTextChange={setFilterText}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
              statuses={statuses}
              onStatusChange={handleStatusChange}
              onClearFilters={handleClearFilters}
            />
            <FilteredFiles files={filteredFiles ?? []} />
          </div>
        </section>
      )}
    </>
  );
}
