interface StatusBadgeProps {
  status: string;
  children: React.ReactNode;
}

function StatusBadge({ status, children }: StatusBadgeProps) {
  const typeColorDefinition: { [key: string]: string } = {
    Active: "bg-green-100 text-green-500 border-green-500",
    UnderOffer: "bg-yellow-100 text-yellow-500 border-yellow-500",
    Sold: "bg-red-100 text-red-500 border-red-500",
    Inactive: "bg-purple-100 text-purple-500 border-purple-500",
  };

  const colorClasses =
    typeColorDefinition[status] || "bg-gray-100 text-gray-500";

  return (
    <>
      <span
        className={`font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 border px-2 py-1 cursor-default ${colorClasses}`}
      >
        {children}
      </span>
    </>
  );
}

export default StatusBadge;
