import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Row from "../components/Row";
import { useAudio } from "../context/AudioContext";
import { profileConfig } from "../data/profileConfig";

export default function Profile() {
  const { type } = useParams();
  const { playMusic } = useAudio();
  const navigate = useNavigate();

  useEffect(() => {
    playMusic();
  }, [playMusic]);

  // Get rows dynamically based on profile type
  const rows = profileConfig[type] || [];

  return (
    <>
      <Navbar />
      <Hero profileType={type} />

      <div className="mt-24 space-y-16 px-6 md:px-12">
        {rows.map((row, index) => (
          <Row
            key={index}
            title={row.title}
            items={row.items.map((item) => ({
              ...item,
              onClick: () => {
                if (item.route) {
                  navigate(item.route);
                }
              },
            }))}
          />
        ))}
      </div>
    </>
  );
}
