import FilterPriceRange from "./FilterPriceRange";
import FilterTextInput from "./FilterTextInput";

interface FilterBarProps {
  filterText: string;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
  minPrice: number | null;
  maxPrice: number | null;
  onMinPriceChange: (min: number | null) => void;
  onMaxPriceChange: (max: number | null) => void;
  onClearFilters: () => void;
}

function FilterSidebar({
  filterText,
  onFilterTextChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onClearFilters,
}: FilterBarProps) {
  return (
    <div className="w-1/4 flex flex-col gap-1.5">
      <div className="font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 border-b border-almostblack">
        <h3>/ Filters</h3>
        <button
          onClick={onClearFilters}
          className="uppercase cursor-pointer hover:underline"
        >
          Clear
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
      <div>
        <p>Type</p>
        <ul></ul>
      </div>
    </div>
  );
}

export default FilterSidebar;
