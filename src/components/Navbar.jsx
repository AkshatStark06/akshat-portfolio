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

  // Detect scroll for Netflix-style navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
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
      ${isScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className="w-full px-6 h-14 flex items-center justify-between">
        
        {/* LEFT: LOGO + NAV LINKS */}
        <div className="flex items-center gap-6">
          
          {/* LOGO */}
          <img
            src="/logo_curved.svg"
            alt="Akshat Srivastava"
            onClick={() => navigate("/")}
            className="h-7 w-auto cursor-pointer select-none"
          />

          {/* NAV LINKS */}
          <ul className="flex items-center gap-6 text-sm text-white">
            <li>
              <Link to="/browse" className="relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e50914] transition-all group-hover:w-full" />
              </Link>
            </li>

            <li>
              <Link to="/profile/recruiter" className="relative group">
                Professional
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e50914] transition-all group-hover:w-full" />
              </Link>
            </li>

            <li>
              <Link to="/skills" className="relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e50914] transition-all group-hover:w-full" />
              </Link>
            </li>

            <li>
              <Link to="/projects" className="relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e50914] transition-all group-hover:w-full" />
              </Link>
            </li>

            <li>
              <Link to="/contact" className="relative group">
                Hire Me
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e50914] transition-all group-hover:w-full" />
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT: PROFILE DROPDOWN */}
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
            <div className="absolute right-0 top-14 w-52 bg-black border border-white/10 rounded-md shadow-lg overflow-hidden">
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
