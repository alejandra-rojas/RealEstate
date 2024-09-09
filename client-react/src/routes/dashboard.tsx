import { useQuery } from "@tanstack/react-query";
import { File } from "../types/types";
import { createFileRoute } from "@tanstack/react-router";
import { fetchFiles } from "../utils/api";
import UpcomingEvents from "../features/Dashboard/UpcomingEvents";
import OngoingTransactions from "../features/Dashboard/OngoingTransactions";
import BusinessPerformance from "../features/Dashboard/BusinessPerformance";
import Header from "../features/Dashboard/Header";
import TopSellers from "../features/Dashboard/TopSellers";
import AddAgentButton from "../features/Dashboard/AddAgentButton";
import AddPropertyButton from "../features/Dashboard/AddPropertyButton";
import RecentNotes from "../features/Dashboard/RecentNotes";

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
      <section>
        <Header />
        <BusinessPerformance files={files} />
        <UpcomingEvents files={files} />
        <OngoingTransactions files={files} />
        <TopSellers files={files} />
        <AddAgentButton />
        <AddPropertyButton />
        <RecentNotes files={files} />
      </section>
    )
  );
}
