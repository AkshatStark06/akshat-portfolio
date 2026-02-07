import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useAudio } from "../context/AudioContext";

export default function Profile() {
  const { type } = useParams();
  const { playMusic } = useAudio();

  useEffect(() => {
    playMusic();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <div className="px-12 mt-16 space-y-16">
        <h2 className="text-xl">
          Today’s Top Picks for {type}
        </h2>

        {/* Netflix rows will go here next */}
      </div>
    </>
  );
}
