import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/property/$id")({
  component: Property,
});

function Property() {
  const { id } = Route.useParams();
  return <div>Hello /property/{id}</div>;
}
