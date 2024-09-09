import { File, Status } from "../../types/types";

function BusinessPerformance({ files }: { files: File[] }) {
  const soldProperties = files.filter((file) => file.status === Status.Sold);

  const totalCommissionEarned = soldProperties.reduce((total, file) => {
    return total + file.salePrice * (file.agreedCommission / 100);
  }, 0);

  return (
    <div>
      Add year dropdown
      <div>
        <h3>Completed Transactions</h3>
        <p>{soldProperties.length}</p>
      </div>
      <div>
        <h3>Booked properties</h3>
        <p>{files.length}</p>
      </div>
      <div>
        <h3>Commission Earned</h3>
        <p>${totalCommissionEarned.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default BusinessPerformance;
