import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/files/")({
  component: Files,
});

function Files() {
  return (
    <div>
      Hello /files!
      <Link to={`/files/4`}>hey</Link>
    </div>
  );
}
