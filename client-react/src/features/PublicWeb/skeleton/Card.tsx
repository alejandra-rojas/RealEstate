function Card() {
  return (
    <article className="w-[24%] flex flex-col border-8 border-white bg-white shadow-sm">
      <div className="w-full h-[190px] flex justify-center items-center bg-gray-300 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 text-gray-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
          />
        </svg>
      </div>
      <div className="flex justify-between pt-3 px-1">
        <div className="h-4 bg-gray-300 w-[50%]"></div>
        <div className="h-4 bg-gray-300 w-1/3"></div>
      </div>
    </article>
  );
}

export default Card;
