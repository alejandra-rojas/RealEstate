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

  return (
    isFetched &&
    files && (
      <section className="flex flex-col gap-4 ">
        <div className="flex ">
          <Buttons />
        </div>
        <div className="flex gap-3.5">
          <UpcomingEvents files={files} />
          <BusinessPerformance files={files} />
          <TopSellers files={files} />
        </div>

        <div className="flex gap-4">
          <OngoingTransactions files={files} />
          <RecentNotes files={files} />
        </div>
      </section>
    )
  );
}
