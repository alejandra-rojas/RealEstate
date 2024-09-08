import { createFileRoute } from "@tanstack/react-router";
import NewForm from "../features/NewForm";

export const Route = createFileRoute("/new")({
  component: AddProperty,
});

function AddProperty() {
  return (
    <div>
      Add a new property
      <NewForm />
    </div>
  );
}
