import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PROFILES = [
  { key: "recruiter", label: "Recruiter" },
  { key: "developer", label: "Developer" },
  { key: "stalker", label: "Stalker 😈" },
  { key: "adventurer", label: "Adventurer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
      <div className="w-full h-[76px] px-12 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-12">
          
          {/* LOGO (SVG — SCALED LIKE REFERENCE) */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer select-none flex items-center overflow-visible"
          >
            <img
              src="/logo_curved.svg"
              alt="Akshat Srivastava"
              className="
                w-[180px]
                md:w-[200px]
                h-auto
                relative
                top-[2px]
              "
            />
          </div>

          {/* NAV LINKS */}
          <ul className="flex items-center gap-6 text-[14px] font-medium text-white">
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

        {/* RIGHT */}
        <div className="relative flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 rounded-full overflow-hidden border border-white/20 hover:border-white transition"
          >
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>

          {open && (
            <div className="absolute right-0 top-[76px] w-52 bg-black/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg overflow-hidden">
              {PROFILES.map((profile) => (
                <button
                  key={profile.key}
                  onClick={() => switchProfile(profile.key)}
                  className="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/10 transition"
                >
                  {profile.label}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}
