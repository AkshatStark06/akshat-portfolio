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
      className="h-screen bg-[#111111] flex items-center justify-center cursor-pointer overflow-hidden"
    >
      <img
        src="/logo_transparent3.png"
        alt="Akshat Srivastava"
        className={`w-[600px]
          md:w-[750px]
          lg:w-[900px]
          object-contain
          -translate-y-6
        ${exit ? "animate-netflix-exit" : "animate-netflix-enter"}`}
      />
    </div>
  );
}
