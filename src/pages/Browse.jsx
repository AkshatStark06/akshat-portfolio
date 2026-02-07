import { useNavigate } from "react-router-dom";

const profiles = [
  { name: "Recruiter", type: "recruiter" },
  { name: "Developer", type: "developer" },
  { name: "Stalker", type: "stalker" },
  { name: "Adventurer", type: "adventurer" },
];

export default function Browse() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-12">Who’s Watching?</h1>

      <div className="flex gap-10">
        {profiles.map((p) => (
          <div
            key={p.type}
            onClick={() => navigate(`/profile/${p.type}`)}
            className="cursor-pointer group"
          >
            <div className="w-32 h-32 bg-gray-700 rounded-lg group-hover:scale-105 transition" />
            <p className="mt-4 text-center text-gray-400 group-hover:text-white">
              {p.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
