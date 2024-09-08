import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Asset, Status } from "../types/types";
import { fetchPublicPortfolio } from "../utils/api";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  const {
    error,
    data: portfolio,
    isFetched,
  } = useQuery<Asset[]>({
    queryKey: ["portfolio"],
    queryFn: fetchPublicPortfolio,
  });

  if (error) return "An error has occurred while fetching : " + error.message;

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

function FilterablePortfolio({ portfolio }: { portfolio: Asset[] }) {
  return (
    <>
      {portfolio.map((property) => {
        return <PropertyCard key={property.propertyId} property={property} />;
      })}
      å
    </>
  );
}

function PropertyCard({ property }: { property: Asset }) {
  return (
    <Link to={`/properties/${property.propertyId}`}>
      <div>
        <h3>{property.propertyName}</h3>
        <p>{property.address}</p>
        <p>{property.description}</p>
        <p>Price: ${property.salePrice}</p>
        <p>Status: {Status[property.status]}</p>
        <img src={property.photo} alt={property.propertyName} />
        <p>Rooms: {property.numberOfRooms}</p>
        <p>Land Size: {property.landSizeInSquareMeters} sqm</p>
        <p>Construction Size: {property.constructionSizeInSquareMeters} sqm</p>
        <p>Created At: {property.createdAt}</p>
      </div>
    </Link>
  );
}
