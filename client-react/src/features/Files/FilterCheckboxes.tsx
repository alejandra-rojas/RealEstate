function FilterCheckboxes() {
  return (
    <div className="w-1/4 flex flex-col gap-1.5">
      <div className="font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 border-b border-almostblack">
        <h3>/ Filter</h3>
        <p>Clear</p>
      </div>
      <div>
        <p>Type</p>
        <ul></ul>
      </div>
    </div>
  );
}

export default FilterCheckboxes;
