import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Asset } from "../types/types";
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
    <div className="flex flex-col gap-4">
      <section className="relative">
        <img
          className="w-full h-[450px] object-cover"
          src="src/assets/hero1.jpg"
          alt="image-hero"
        />
        <div className="absolute top-[20%] left-[3%] w-2/3 p-6 flex flex-col gap-4">
          <h4 className="font-serif text-[2.5rem] text-white font-medium ">
            Your perfect home is just a click away.
          </h4>
          <h5 className="font-serif font-bold text-2xl text-white w-[90%]">
            We offer the finest properties on the market, handpicked for their
            quality, location, and value.
          </h5>
        </div>
      </section>
      {isFetched && <FilterablePortfolio portfolio={portfolio ?? []} />}
    </div>
  );
}

function FilterablePortfolio({ portfolio }: { portfolio: Asset[] }) {
  return (
    <section className="w-full flex flex-wrap gap-4">
      {portfolio
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((property) => {
          return <PropertyCard key={property.propertyId} property={property} />;
        })}
    </section>
  );
}

function PropertyCard({ property }: { property: Asset }) {
  return (
    <article className="w-[24%] flex flex-col border-8 border-white hover:border-yellow-100 bg-white group">
      <Link to={`/properties/${property.propertyId}`}>
        <img
          src={property.photo}
          alt={property.propertyName}
          className="w-full h-[190px] object-cover "
        />
        <div className="flex justify-between pt-2 px-1 group-hover:bg-yellow-100">
          <h3 className="">{property.propertyName}</h3>
          <p className="font-semibold">
            ${property.salePrice.toLocaleString()}
          </p>
        </div>
      </Link>
    </article>
  );
}
