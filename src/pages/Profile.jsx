import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Row from "../components/Row";
import { useAudio } from "../context/AudioContext";

export default function Profile() {
  const { type } = useParams();
  const { playMusic } = useAudio();

  useEffect(() => {
    playMusic();
  }, []);

  // ✅ DATA MUST BE HERE (NOT INSIDE JSX)
  const skills = [
    { title: "Python" },
    { title: "SQL" },
    { title: "Power BI" },
    { title: "Excel" },
    { title: "Machine Learning" },
    { title: "Statistics" },
  ];

  const projects = [
    { title: "Fake News Detection" },
    { title: "Sales Analytics Dashboard" },
    { title: "Customer Churn Analysis" },
  ];

  const contact = [
    {
      title: "Email Me",
      onClick: () =>
        (window.location.href = "mailto:your@email.com"),
    },
    {
      title: "LinkedIn",
      onClick: () =>
        window.open("https://linkedin.com", "_blank"),
    },
    {
      title: "GitHub",
      onClick: () =>
        window.open("https://github.com", "_blank"),
    },
  ];

  // ✅ JSX ONLY BELOW
  return (
    <>
      <Navbar />
      <Hero />

      <div className="mt-20 space-y-16">
        <Row
          title={`Today's Top Picks for ${type}`}
          items={skills}
        />

        <Row
          title="Projects"
          items={projects}
        />

        <Row
          title="Contact"
          items={contact}
        />
      </div>
    </>
  );
}
