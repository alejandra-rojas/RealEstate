import { File, Status } from "../../types/types";

function TopSellers({ files }: { files: File[] }) {
  const topSellers = processAgentCommissions(files);

  return (
    <div className="font-rmono flex flex-col gap-4 w-1/2">
      <h2 className="text-xl border-b border-[#CFCFCF]">Top Agents</h2>
      {topSellers.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {topSellers.map((agent) => (
            <li key={agent.agentId}>
              <div className="flex items-center gap-3">
                <img
                  src={agent.agentPhoto}
                  alt={agent.agentName}
                  className="w-8 aspect-square"
                />
                <strong>{agent.agentName}:</strong>$
                {agent.totalCommission.toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sales data available.</p>
      )}
    </div>
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
