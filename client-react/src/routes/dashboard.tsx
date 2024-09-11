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
      <section className="flex flex-col gap-4 ">
        <div className="flex ">
          {/* <h2 className="font-rmono uppercase text-4xl py-3 text-gray-200 leading-none">
            Dashboard
          </h2> */}
          <Buttons />
        </div>
        <UpcomingEvents files={files} />
        <div className="flex gap-4">
          <OngoingTransactions files={files} />
          <RecentNotes files={files} />
        </div>
        <div className="bg-[#eeeeee] border border-gray-200 p-8 rounded-sm flex">
          <BusinessPerformance files={files} />
          <TopSellers files={files} />
        </div>
      </section>
    )
  );
}
