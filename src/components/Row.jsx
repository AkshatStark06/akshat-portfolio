import Tile from "./Tile";

export default function Row({ title, items }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-medium px-12">
        {title}
      </h2>

      <div className="flex gap-6 px-12 overflow-x-auto overflow-y-visible scrollbar-hide">
        {items.map((item, idx) => (
          <Tile
            key={idx}
            title={item.title}
            image={item.image}
            onClick={item.onClick}
          />
        ))}
      </div>
    </section>
  );
}
