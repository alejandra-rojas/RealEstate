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
    <div className="flex gap-4 text-gray-600">
      <div>
        <label className="block text-sm font-medium">Minimum Price</label>
        <input
          type="number"
          value={minPrice ?? ""}
          onChange={handleMinPriceChange}
          placeholder="Min Price"
          className="rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Maximum Price</label>
        <input
          type="number"
          value={maxPrice ?? ""}
          onChange={handleMaxPriceChange}
          placeholder="Max Price"
          className="rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
        />
      </div>
    </div>
  );
}

export default FilterPriceRange;
