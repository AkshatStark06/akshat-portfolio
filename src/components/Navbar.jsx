import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PROFILES = [
  { key: "recruiter", label: "Recruiter" },
  { key: "developer", label: "Developer" },
  { key: "stalker", label: "Stalker 😈" },
  { key: "adventurer", label: "Adventurer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const switchProfile = (profileKey) => {
    setOpen(false);
    navigate(`/profile/${profileKey}`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-6 h-14 flex items-center justify-between">
        
        {/* LEFT: NAME + TABS */}
        <div className="flex items-center gap-5">
          <div
            onClick={() => navigate("/")}
            className="text-[#e50914] font-bold text-base tracking-wide cursor-pointer"
          >
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
            <div className="absolute right-0 top-14 w-52 bg-black/95 backdrop-blur-md border border-white/10 rounded-md shadow-lg overflow-hidden">
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
