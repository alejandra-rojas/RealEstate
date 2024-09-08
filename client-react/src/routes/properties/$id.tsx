import { useQuery } from "@tanstack/react-query";
import { Asset, Status } from "../../types/types";
import { createFileRoute } from "@tanstack/react-router";
import { fetchPublicProperty } from "../../utils/api";

export const Route = createFileRoute("/properties/$id")({
  component: Property,
});

function Property() {
  const { id } = Route.useParams();

  const {
    data: property,
    error,
    isLoading,
    isFetched,
  } = useQuery<Asset>({
    queryKey: ["property", id],
    queryFn: () => fetchPublicProperty(id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching the property details.</p>;
  }

  return (
    <>
      {isFetched && (
        <div>
          <img src={property?.photo} alt={property?.propertyName} />
          <h3>{property?.propertyName}</h3>
          <p>{property?.address}</p>
          <p>{property?.description}</p>
          <p>Price: ${property?.salePrice}</p>
          <p>Status: {Status[property!.status]}</p>
          <p>Rooms: {property?.numberOfRooms}</p>
          <p>Land Size: {property?.landSizeInSquareMeters} sqm</p>
          <p>
            Construction Size: {property?.constructionSizeInSquareMeters} sqm
          </p>
          <p>Created At: {property?.createdAt}</p>
        </div>
      )}
    </>
  );
}
