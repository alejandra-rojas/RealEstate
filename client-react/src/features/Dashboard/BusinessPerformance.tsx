import { File, Status } from "../../types/types";

function BusinessPerformance({ files }: { files: File[] }) {
  const soldProperties = files.filter((file) => file.status === Status.Sold);

  const totalCommissionEarned = soldProperties.reduce((total, file) => {
    return total + file.salePrice * (file.agreedCommission / 100);
  }, 0);

  return (
    <article className="font-rmono flex flex-col gap-4 w-[20%] bg-[#eeeeee] border border-gray-200 p-2 rounded-sm ">
      <h3 className="font-rmono uppercase text-sm text-almostblack pb-1  border-b border-gray-400">
        / Monthly Overview
      </h3>
      <div className="uppercase text-sm flex flex-col px-2 ">
        <div className="flex gap-2 items-end font-semibold justify-between">
          <h4 className="">Commission: </h4>
          <p>${totalCommissionEarned.toLocaleString()}</p>
        </div>
        <div className="flex gap-2 items-end justify-between">
          <h4 className="">Transactions:</h4>
          <p>{soldProperties.length}</p>
        </div>
        <div className="flex gap-2 items-end justify-between">
          <h4 className="">Booked Properties:</h4>
          <p>{files.length}</p>
        </div>
      </div>
    </article>
  );
}

export default BusinessPerformance;
