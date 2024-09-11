interface Buyer {
  fullName: string;
  primaryNumber: string;
}

function Buyer({ buyer }: { buyer: Buyer }) {
  return (
    <div className="bg-[#D9C9B7] p-3 ">
      <p className="font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 mb-2 border-b border-gray-600">
        Buyer:
      </p>
      <p className="font-semibold">{buyer.fullName}</p>
      <p>{buyer.primaryNumber}</p>
      <p>Accepted offer: $500,000</p>
    </div>
  );
}

export default Buyer;
