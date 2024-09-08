import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/new")({
  component: AddProperty,
});

function AddProperty() {
  return <div>Add a new property</div>;
}
