interface Buyer {
  fullName: string;
  primaryNumber: string;
}

function Buyer({ buyer }: { buyer: Buyer }) {
  return (
    <div>
      <p>Buyer details</p>
      <p>{buyer.fullName}</p>
      <p>{buyer.primaryNumber}</p>
    </div>
  );
}

export default Buyer;
