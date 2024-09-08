import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Property } from "../types/types";
import { fetchPublicPortfolio } from "../utils/api";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  const {
    error,
    data: portfolio,
    isFetched,
  } = useQuery<Property[]>({
    queryKey: ["portfolio"],
    queryFn: fetchPublicPortfolio,
  });

  console.log(portfolio);

  if (error)
    return "An error has occurred while fetching salties: " + error.message;

  return (
    <>
      {isFetched && (
        <img
          className="p-1.5 h-auto object-cover"
          src="src/assets/homepage-hero.jpg"
          alt="image-hero"
        />
      )}
    </>
  );
}
