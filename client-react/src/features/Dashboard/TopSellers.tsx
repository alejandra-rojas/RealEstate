import { File, Status } from "../../types/types";

function TopSellers({ files }: { files: File[] }) {
  const topSellers = processAgentCommissions(files);

  return (
    <article className="font-rmono flex flex-col gap-4 w-[20%] bg-[#eeeeee] border border-gray-200 p-2 rounded-sm ">
      <h3 className="font-rmono uppercase text-sm text-almostblack pb-1  border-b border-gray-400">
        / top sellers
      </h3>
      <div className="uppercase text-sm flex flex-col px-2 gap-1">
        {topSellers.length > 0 ? (
          <ul className="flex flex-col">
            {topSellers.map((agent, index) => (
              <li
                key={agent.agentId}
                className={`flex items-center gap-3 ${index === 0 ? "font-semibold" : ""}`}
              >
                <p className="w-1/3">{agent.agentName.split(" ")[0]}:</p>
                <p className="w-1/2">
                  ${agent.totalCommission.toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No sales data available.</p>
        )}
      </div>
    </article>
  );
}

export default TopSellers;

interface AgentCommission {
  agentId: number;
  agentName: string;
  agentPhoto: string;
  totalCommission: number;
}

function processAgentCommissions(files: File[]): AgentCommission[] {
  const agentCommissions: AgentCommission[] = [];

  files
    .filter((file) => file.status === Status.Sold)
    .forEach((file) => {
      const { agentId, name, photo } = file.propertyLiasonAgent;
      const commission = file.salePrice * (file.agreedCommission / 100);

      const agent = agentCommissions.find((agent) => agent.agentId === agentId);

      if (agent) {
        agent.totalCommission += commission;
      } else {
        agentCommissions.push({
          agentId,
          agentName: name,
          agentPhoto: photo,
          totalCommission: commission,
        });
      }
    });

  return agentCommissions.sort((a, b) => b.totalCommission - a.totalCommission);
}
