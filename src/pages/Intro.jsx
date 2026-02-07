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
      <h1
        className={`text-red-600 text-5xl md:text-6xl font-bold tracking-widest
        ${exit ? "animate-netflix-exit" : "animate-netflix-enter"}`}
      >
        AKSHAT SRIVASTAVA
      </h1>
    </div>
  );
}
