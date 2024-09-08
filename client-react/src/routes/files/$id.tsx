import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/files/$id")({
  component: File,
});

function File() {
  const { id } = Route.useParams();

  return (
    <>
      <div>file {id}</div>
    </>
  );
}
