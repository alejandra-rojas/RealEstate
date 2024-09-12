import Card from "./Card";

export default function SkeletonPortfolio() {
  return (
    <section className="w-full flex flex-wrap gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} />
      ))}
    </section>
  );
}
