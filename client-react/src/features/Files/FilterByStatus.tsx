type StatusFilters = {
  active: boolean;
  underOffer: boolean;
  inactive: boolean;
  sold: boolean;
};

interface CheckboxesProps {
  statuses: StatusFilters;
  onStatusChange: (statusKey: keyof StatusFilters) => void;
}

export default function FilterByStatus({
  statuses,
  onStatusChange,
}: CheckboxesProps) {
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
            <svg
              className="Directory_directoryIcon__DGpIr"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Folder Icon</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 0H7V1H1V0ZM1 6V1H0V9H1V10H11V9H12V3H11V2H8V1H7V2H8V3H11V4H3V5H2V6H1ZM1 7V9H11V5H3V6H2V7H1Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-sm">by Status</span>
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
                      checked={statuses.active}
                      onChange={() => onStatusChange("active")}
                      className="size-5 rounded border-gray-300"
                    />

                    <span> Active </span>
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
                      checked={statuses.underOffer}
                      onChange={() => onStatusChange("underOffer")}
                      className="size-5 rounded border-gray-300"
                    />

                    <span> Under Offer</span>
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
                      checked={statuses.sold}
                      onChange={() => onStatusChange("sold")}
                      className="size-5 rounded border-gray-300"
                    />

                    <span> Sold</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterInactive"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterInactive"
                      checked={statuses.inactive}
                      onChange={() => onStatusChange("inactive")}
                      className="size-5 rounded border-gray-300"
                    />

                    <span> Inactive</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
