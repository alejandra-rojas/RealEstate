function FilterByCharacteristics() {
  return (
    <div className="flex gap-8 font-rmono uppercase text-xs text-gray-600 ">
      <div className="relative w-full">
        <details
          open
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 transition hover:border-gray-600">
            <span className="transition rotate-180 group-open:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>{" "}
            <span className="text-sm">by characteristics</span>
          </summary>

          <div className="z-50 group-open:start-0 group-open:top-auto group-open:mt-2">
            <div className="w-full rounded border border-gray-200">
              <ul className="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label
                    htmlFor="FilterActive"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterActive"
                      className="size-5 rounded border-gray-300"
                    />

                    <span>Swimming pool</span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterUnderOffer"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterUnderOffer"
                      className="size-5 rounded border-gray-300"
                    />

                    <span>garden</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterSold"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterSold"
                      className="size-5 rounded border-gray-300"
                    />

                    <span>cash only</span>
                  </label>
                </li>
              </ul>
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between gap-4">
                  <label
                    htmlFor="FilterPriceFrom"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">land</span>

                    <input
                      type="number"
                      id="FilterPriceFrom"
                      className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </label>

                  <label
                    htmlFor="FilterPriceTo"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">cons</span>

                    <input
                      type="number"
                      id="FilterPriceTo"
                      className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}

export default FilterByCharacteristics;
