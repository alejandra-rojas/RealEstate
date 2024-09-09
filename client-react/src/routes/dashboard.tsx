import { useQuery } from "@tanstack/react-query";
import { File } from "../types/types";
import { createFileRoute } from "@tanstack/react-router";
import { fetchFiles } from "../utils/api";
import UpcomingEvents from "../features/Dashboard/UpcomingEvents";
import OngoingTransactions from "../features/Dashboard/OngoingTransactions";
import BusinessPerformance from "../features/Dashboard/BusinessPerformance";
import Header from "../features/Dashboard/Header";
import TopSellers from "../features/Dashboard/TopSellers";

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
    isFetched && (
      <section>
        <Header />
        <BusinessPerformance files={files!} />
        <UpcomingEvents files={files!} />
        <OngoingTransactions files={files!} />
        <TopSellers files={files!} />
      </section>
    )
  );
}
