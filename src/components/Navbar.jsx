import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { profiles } from "../data/profiles"; // <-- IMPORTANT

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const { type } = useParams(); // must match route: /profile/:type

  const activeProfile = profiles[type] || profiles["recruiter"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchProfile = (profileKey) => {
    setOpen(false);
    navigate(`/profile/${profileKey}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
      ${isScrolled ? "bg-black/90" : "bg-transparent"}`}
    >
      <div className="w-full h-[76px] pl-1 md:pl-0 pr-6 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-0">
          
          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer select-none flex items-center overflow-visible"
          >
            <img
              src="/logo_transparent3.png"
              alt="Akshat Srivastava"
              className="w-[300px] md:w-[320px] h-auto translate-y-[-2.5px]"
            />
          </div>

          {/* NAV LINKS */}
          <ul className="flex items-center gap-8 text-[16px] font-medium text-white">
            {[
              { label: "Home", path: "/browse" },
              { label: "Professional", path: "/profile/recruiter" },
              { label: "Skills", path: "/skills" },
              { label: "Projects", path: "/projects" },
              { label: "Hire Me", path: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e50914] transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT PROFILE BUTTON */}
        <div className="relative flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 rounded-md overflow-hidden border border-white/20 hover:border-white transition"
          >
            <img
              src={activeProfile.icon}
              alt={activeProfile.name}
              className="w-full h-full object-cover"
            />
          </button>

          {open && (
            <div className="absolute right-0 top-[76px] w-56 bg-black/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg overflow-hidden">
              {Object.entries(profiles).map(([key, profile]) => (
                <button
                  key={key}
                  onClick={() => switchProfile(key)}
                  className="w-full px-4 py-3 flex items-center gap-3 text-sm text-white hover:bg-white/10 transition"
                >
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="w-7 h-7 rounded-md object-cover"
                  />
                  {profile.name}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}
