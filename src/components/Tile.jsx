export default function Tile({ title, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative
        min-w-[240px] h-[140px]
        rounded-xl
        overflow-hidden
        cursor-pointer
        bg-neutral-900
        transform transition duration-300

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
      <span className="absolute bottom-3 left-3 text-sm font-medium">
        {title}
      </span>
    </div>
  );
}
