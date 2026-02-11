import { useNavigate } from "react-router-dom";

const profiles = [
  { name: "Recruiter", type: "recruiter", icon: "/profile_logo1.png" },
  { name: "Developer", type: "developer", icon: "/profile_logo2.png" },
  { name: "Stalker", type: "stalker", icon: "/profile_logo3.png" },
  { name: "Adventurer", type: "adventurer", icon: "/profile_logo4.png" },
];

export default function Browse() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-semibold text-gray-200 mb-16">Who’s Watching?</h1>

      <div className="flex flex-wrap justify-center gap-16">
        {profiles.map((p) => (
          <div
            key={p.type}
            onClick={() => navigate(`/profile/${p.type}`)}
            className="cursor-pointer group flex flex-col items-center"
          >
            <img
              src={p.icon}
              alt={p.name}
              className="
                w-40 h-40 md:w-48 md:h-48
                object-cover 
                rounded-xl
                border-4 border-transparent
                group-hover:border-white
                group-hover:scale-105
                transition-all duration-300 ease-out
                shadow-lg group-hover:shadow-2xl
              "
            />

            <p className="mt-8 text-lg text-gray-400 group-hover:text-white transition">
              {p.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
