interface FilterBarProps {
  minPrice: number | null;
  maxPrice: number | null;
  onMinPriceChange: (min: number | null) => void;
  onMaxPriceChange: (max: number | null) => void;
}

function FilterPriceRange({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: FilterBarProps) {
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onMinPriceChange(e.target.value ? Number(e.target.value) : null);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onMaxPriceChange(e.target.value ? Number(e.target.value) : null);
  };
  return (
    <>
      <div className="pl-1 pb-3">
        <header className="flex items-center justify-between px-0 py-1.5">
          <span className="text-sm text-gray-500"></span>
        </header>
        <div className="flex justify-between gap-2">
          <label htmlFor="FilterPriceFrom" className="flex items-center gap-1">
            <span className="text-sm text-gray-600">$</span>

            <input
              type="number"
              id="FilterPriceFrom"
              value={minPrice ?? ""}
              onChange={handleMinPriceChange}
              placeholder="Min"
              className="w-full rounded-sm border-gray-200 shadow-xs sm:text-sm"
              step="50000"
            />
          </label>

          <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
            <span className="text-sm text-gray-600">$</span>

            <input
              type="number"
              id="FilterPriceTo"
              value={maxPrice ?? ""}
              onChange={handleMaxPriceChange}
              placeholder="Max"
              className="w-full rounded-sm border-gray-200 shadow-xs sm:text-sm"
              step="50000"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default FilterPriceRange;
