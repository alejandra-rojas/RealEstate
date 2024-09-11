import FilterByStatus from "./FilterByStatus";
import FilterPriceRange from "./FilterPriceRange";
import FilterTextInput from "./FilterTextInput";

type StatusFilters = {
  active: boolean;
  underOffer: boolean;
  inactive: boolean;
  sold: boolean;
};

interface FilterBarProps {
  filterText: string;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
  minPrice: number | null;
  maxPrice: number | null;
  onMinPriceChange: (min: number | null) => void;
  onMaxPriceChange: (max: number | null) => void;
  statuses: StatusFilters;
  onStatusChange: (statusKey: keyof StatusFilters) => void;
  onClearFilters: () => void;
}

function FilterSidebar({
  filterText,
  onFilterTextChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  statuses,
  onStatusChange,
  onClearFilters,
}: FilterBarProps) {
  return (
    <div className="w-1/4 flex flex-col gap-2">
      <div className="font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 border-b border-almostblack">
        <h3>/Filters</h3>
        <button
          onClick={onClearFilters}
          className="uppercase cursor-pointer underline hover:font-medium"
        >
          Reset
        </button>
      </div>
      <FilterTextInput
        filterText={filterText}
        onFilterTextChange={onFilterTextChange}
      />
      <FilterPriceRange
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={onMinPriceChange}
        onMaxPriceChange={onMaxPriceChange}
      />
      <FilterByStatus statuses={statuses} onStatusChange={onStatusChange} />
    </div>
  );
}

export default FilterSidebar;
