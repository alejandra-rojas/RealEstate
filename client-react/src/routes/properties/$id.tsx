import { useQuery } from "@tanstack/react-query";
import { Asset } from "../../types/types";
import { createFileRoute } from "@tanstack/react-router";
import { fetchPublicProperty } from "../../utils/api";

export const Route = createFileRoute("/properties/$id")({
  component: Property,
});

function Property() {
  const { id } = Route.useParams();

  const {
    data: p,
    error,
    isLoading,
  } = useQuery<Asset>({
    queryKey: ["property", id],
    queryFn: fetchPublicProperty(id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching the property details.</p>;
  }

  return (
    <div>
      <h1>{p?.propertyName}</h1>
      <p>{p?.description}</p>
      <p>Price: ${p?.salePrice}</p>
      <img src={p?.photo} alt={p?.propertyName} />
    </div>
  );
}
