import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Intro() {
  const navigate = useNavigate();
  const [exit, setExit] = useState(false);

  const handleClick = () => {
    setExit(true);

    // wait for animation to finish, then navigate
    setTimeout(() => {
      navigate("/browse");
    }, 1200);
  };

  return (
    <div
      onClick={handleClick}
      className="h-screen bg-black flex items-center justify-center cursor-pointer overflow-hidden"
    >
      <img
        src="/logo_curved.svg"
        alt="Akshat Srivastava"
        className={`w-[260px] md:w-[340px] lg:w-[380px]
        ${exit ? "animate-netflix-exit" : "animate-netflix-enter"}`}
      />
    </div>
  );
}
