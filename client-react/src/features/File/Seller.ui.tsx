interface Seller {
  fullName: string;
  primaryNumber: string;
}

function Seller({ seller }: { seller: Seller }) {
  return (
    <div>
      <p>Seller details</p>
      <p>{seller.fullName}</p>
      <p>{seller.primaryNumber}</p>
    </div>
  );
}

export default Seller;
