import { File, Status } from "../../types/types";

function BusinessPerformance({ files }: { files: File[] }) {
  const soldProperties = files.filter((file) => file.status === Status.Sold);

  const totalCommissionEarned = soldProperties.reduce((total, file) => {
    return total + file.salePrice * (file.agreedCommission / 100);
  }, 0);

  return (
    <article className="font-rmono flex flex-col gap-4 w-1/2">
      <h3 className="font-rmono uppercase text-sm text-almostblack pb-1  border-b border-gray-400">
        / Business Overview
      </h3>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-end">
          <p className="text-3xl leading-none">
            ${totalCommissionEarned.toLocaleString()}
          </p>
          <h3 className="">Commission/year</h3>
        </div>
        <div className="flex gap-2 items-end">
          <p className="text-3xl leading-none">{soldProperties.length}</p>
          <h3 className="">Completed Transactions</h3>
        </div>
        <div className="flex gap-2 items-end">
          <p className="text-3xl leading-none">{files.length}</p>
          <h3 className="">Booked Properties</h3>
        </div>
      </div>
    </article>
  );
}

export default BusinessPerformance;
