export default function Tile({ title, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative group
        min-w-[240px] h-[140px]
        rounded-xl
        overflow-hidden
        cursor-pointer
        bg-neutral-900
        transition-all duration-300 ease-out
        hover:scale-[1.25]
        hover:z-20
      "
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition" />

      {/* title */}
      <span className="absolute bottom-3 left-3 text-sm font-semibold
                 opacity-90 group-hover:opacity-100 transition-opacity">

        {title}
      </span>
    </div>
  );
}
