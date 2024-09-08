import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Property, Status } from "../types/types";
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
      <img
        className="p-1.5 h-auto object-cover"
        src="src/assets/homepage-hero.jpg"
        alt="image-hero"
      />
      {isFetched && (
        <div>
          <FilterablePortfolio portfolio={portfolio ?? []} />
        </div>
      )}
    </>
  );
}

function FilterablePortfolio({ portfolio }: { portfolio: Property[] }) {
  return (
    <>
      {portfolio.map((p) => {
        return (
          <PropertyCard
            createdAt={p.createdAt}
            salePrice={p.salePrice}
            propertyId={p.propertyId}
            status={p.status}
            propertyName={p.propertyName}
            address={p.address}
            landSizeInSquareMeters={p.landSizeInSquareMeters}
            constructionSizeInSquareMeters={p.constructionSizeInSquareMeters}
            photo={p.photo}
            numberOfRooms={p.numberOfRooms}
            description={p.description}
            key={p.propertyId}
          />
        );
      })}
    </>
  );
}

function PropertyCard({
  createdAt,
  salePrice,
  status,
  propertyName,
  address,
  landSizeInSquareMeters,
  constructionSizeInSquareMeters,
  numberOfRooms,
  description,
  photo,
}: Property) {
  return (
    <div>
      <h3>{propertyName}</h3>
      <p>{address}</p>
      <p>{description}</p>
      <p>Price: ${salePrice}</p>
      <p>Status: {Status[status]}</p>
      <img src={photo} alt={propertyName} />
      <p>Rooms: {numberOfRooms}</p>
      <p>Land Size: {landSizeInSquareMeters} sqm</p>
      <p>Construction Size: {constructionSizeInSquareMeters} sqm</p>
      <p>Created At: {createdAt}</p>
    </div>
  );
}
