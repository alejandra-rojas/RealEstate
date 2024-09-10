interface Seller {
  fullName: string;
  primaryNumber: string;
}

function Seller({ seller }: { seller: Seller }) {
  return (
    <div className="flex flex-col absolute bg-[#BCCABB] p-4 ">
      <p className="font-rmono uppercase text-sm text-almostblack flex justify-between pb-1 mb-2 border-b border-gray-600">
        Seller:
      </p>
      <p className="font-semibold">{seller.fullName}</p>
      <p>{seller.primaryNumber}</p>
    </div>
  );
}

export default Seller;
