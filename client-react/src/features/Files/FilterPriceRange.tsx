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
    <div className="p-4 flex gap-4">
      <div className="mb-4">
        <label className="block text-sm font-medium">Minimum Price</label>
        <input
          type="number"
          value={minPrice ?? ""}
          onChange={handleMinPriceChange}
          placeholder="Min Price"
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Maximum Price</label>
        <input
          type="number"
          value={maxPrice ?? ""}
          onChange={handleMaxPriceChange}
          placeholder="Max Price"
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
}

export default FilterPriceRange;
