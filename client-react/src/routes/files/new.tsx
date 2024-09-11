import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import NewForm from "../../features/FormAddProperty/NewForm";

export const Route = createFileRoute("/files/new")({
  component: NewPropertyPage,
});

function NewPropertyPage() {
  return (
    <section className="flex flex-col mt-6">
      <div className="bg-[#eeeeee] border border-gray-200 py-6 px-6">
        <div className="font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 mb-4 border-b border-almostblack">
          <h2>/ File a new property </h2>
          <Link to={`/dashboard`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Link>
        </div>

        <NewForm />
      </div>
    </section>
  );
}
