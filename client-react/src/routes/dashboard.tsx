import { useQuery } from "@tanstack/react-query";
import { File } from "../types/types";
import { createFileRoute } from "@tanstack/react-router";
import { fetchFiles } from "../utils/api";
import UpcomingEvents from "../features/Dashboard/UpcomingEvents";
import OngoingTransactions from "../features/Dashboard/OngoingTransactions";
import BusinessPerformance from "../features/Dashboard/BusinessPerformance";
import TopSellers from "../features/Dashboard/TopSellers";
import RecentNotes from "../features/Dashboard/RecentNotes";
import Buttons from "../features/Dashboard/Buttons";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { data: files, isFetched } = useQuery<File[]>({
    queryKey: ["files"],
    queryFn: fetchFiles,
  });

  console.log(files);

  return (
    isFetched &&
    files && (
      <section className="flex flex-col gap-6 ">
        <div className="flex justify-between items-start">
          <h2 className="font-rmono uppercase text-4xl py-3 text-gray-200 leading-none">
            Management Dashboard
          </h2>
          <Buttons />
        </div>

        <section className="bg-gray-100 py-4 px-6 rounded-md border border-gray-300">
          <UpcomingEvents files={files} />
        </section>

        <div className="flex gap-3">
          <OngoingTransactions files={files} />
          <RecentNotes files={files} />
        </div>
        <section className="bg-[#e7e7e7] py-8 px-9 rounded-xl flex gap-8">
          <BusinessPerformance files={files} />
          <TopSellers files={files} />
        </section>
      </section>
    )
  );
}
