const SquareIcon = ({ width = 6, height = 6, fill = "black" }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6 6"
  >
    <rect width="6" height="6" style={{ fill }} />
  </svg>
);

const CheckboxIcon = ({ width = 12, height = 11 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Checkbox icon</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1H0V9H1V10H11V9H12V1H11V0H1V1ZM1 1H11V9H1V1ZM9 2H10V3H9V2ZM8 4V3H9V4H8ZM7 5V4H8V5H7ZM6 6V5H7V6H6ZM5 6H6V7H5V6ZM5 6H4V5H5V6Z"
      fill="currentColor"
    ></path>
  </svg>
);

const CheckboxIconSimple = ({ width = 12, height = 11 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Checkbox icon</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1L0 1L0 8L1 8L1 9L9 9L9 8L10 8L10 1L9 1L9 0L1 0L1 1ZM1 1L9 1L9 8L1 8L1 1Z"
      fill="currentColor"
    ></path>
  </svg>
);

export default function SellerDocs() {
  return (
    <article className="mb-6">
      <div className="flex justify-between pb-1 border-b border-gray-400">
        <h3 className="font-rmono uppercase text-sm text-almostblack ">
          / Digital dOCUMENTATION
        </h3>
      </div>
      <ul>
        <li className="border-b border-dotted border-gray-400 flex items-start">
          <div className="pt-1 flex items-center gap-2 min-w-[15%]  h-full">
            <SquareIcon />
            <h5 className="font-rmono uppercase text-sm text-almostblack ">
              Property:
            </h5>
          </div>
          <ul className="py-2 pl-3 flex flex-wrap gap-4 gap-y-2 items-center font-rmono text-xs uppercase border-l border-dotted border-gray-400">
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>Property deed</p>
            </li>
            <li className="flex items-center gap-1">
              <CheckboxIconSimple />
              <p>tax payment receipt </p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>Maintenance payment receipt</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>No-debt certificate</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>Construction declaration</p>
            </li>
          </ul>
        </li>
        <li className="border-b border-dotted border-gray-400 flex items-start">
          <div className="pt-1 flex items-center gap-2 min-w-[15%]  h-full">
            <SquareIcon />
            <h5 className="font-rmono uppercase text-sm text-almostblack ">
              Seller:
            </h5>
          </div>
          <ul className="py-2 pl-3 flex flex-wrap gap-4 gap-y-2 items-center font-rmono text-xs uppercase border-l border-dotted border-gray-400">
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>id with photo&signature</p>
            </li>
            <li className="flex items-center gap-1">
              <CheckboxIconSimple />
              <p>Marriage certificate</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>Birth certificate</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>CURP</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>RFC</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>Proof of address</p>
            </li>
          </ul>
        </li>
        <li className="border-b border-dotted border-gray-400 flex items-start">
          <div className="pt-1 flex items-center gap-2 min-w-[15%]  h-full">
            <SquareIcon />
            <h5 className="font-rmono uppercase text-sm text-almostblack ">
              Buyer:
            </h5>
          </div>
          <ul className="py-2 pl-3 flex flex-wrap gap-4 gap-y-2 items-center font-rmono text-xs uppercase border-l border-dotted border-gray-400">
            <li className="flex items-center gap-1 ">
              <CheckboxIcon />
              <p>id with photo&signature</p>
            </li>
            <li className="flex items-center gap-1">
              <CheckboxIconSimple />
              <p>Marriage certificate</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIconSimple />
              <p>Birth certificate</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIconSimple />
              <p>CURP</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIconSimple />
              <p>RFC</p>
            </li>
            <li className="flex items-center gap-1 ">
              <CheckboxIconSimple />
              <p>Proof of address</p>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
}
