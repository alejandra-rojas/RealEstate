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
    <div className="flex gap-1 text-gray-600 font-rmono uppercase text-xs ">
      <div className="flex flex-col p-1 w-1/2">
        <label className="block">Min Price</label>
        <input
          type="number"
          value={minPrice ?? ""}
          onChange={handleMinPriceChange}
          placeholder="Min Price"
          className="border-gray-200 rounded-sm py-2.5 sm:text-sm"
        />
      </div>

      <div className="flex flex-col p-1 w-1/2">
        <label className="block">Max Price</label>
        <input
          type="number"
          value={maxPrice ?? ""}
          onChange={handleMaxPriceChange}
          placeholder="Max Price"
          className=" border-gray-200 rounded-sm py-2.5 sm:text-sm"
        />
      </div>
    </div>
  );
}

export default FilterPriceRange;
