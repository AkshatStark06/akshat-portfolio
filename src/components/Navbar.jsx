export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-6 h-14 flex items-center">
        
        <div className="flex items-center gap-5">
          <div className="text-[#e50914] font-bold text-base tracking-wide">
            AKSHAT
          </div>

          <ul className="flex items-center gap-6 text-sm text-white">
            {["Home", "Professional", "Skills", "Projects", "Hire Me"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-white transition relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e50914] transition-all group-hover:w-full"></span>
                </li>
              )
            )}
          </ul>
        </div>

      </div>
    </nav>
  );
}
