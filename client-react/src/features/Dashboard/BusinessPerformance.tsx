import { File } from "../../types/types";

function BusinessPerformance({ files }: { files: File[] }) {
  const soldProperties = files.filter((file) => file.status === 2);

  return (
    <div>
      <div>
        <h3>Completed Transactions</h3>
        <p>{soldProperties.length}</p>
      </div>
      <div>Booked properties</div>
      <div>Commision earned</div>
    </div>
  );
}

export default BusinessPerformance;
