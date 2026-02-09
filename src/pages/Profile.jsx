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
  { title: "Python", image: "/images/python.jpg" },
  { title: "SQL", image: "/images/sql.jpg" },
  { title: "Power BI", image: "/images/powerbi.jpg" },
  { title: "Excel", image: "/images/excel.jpg" },
  { title: "Machine Learning", image: "/images/ml.jpg" },
];

const projects = [
  { title: "Fake News Detection", image: "/images/project1.jpg" },
  { title: "Sales Analytics Dashboard", image: "/images/project2.jpg" },
];

const contact = [
  {
    title: "Email Me",
    image: "/images/contact.jpg",
    onClick: () => (window.location.href = "mailto:akshat12.cp@gmail.com"),
  },
  {
    title: "LinkedIn",
    image: "/images/linkedin.jpg",
    onClick: () => window.open("https://linkedin.com/in/akshat-srivastava06/", "_blank"),
  },
  {
    title: "GitHub",
    image: "/images/github.jpg",
    onClick: () => window.open("https://github.com/AkshatStark06", "_blank"),
  },
];


  // ✅ JSX ONLY BELOW
  return (
    <>
      <Navbar />
      <Hero />

      <div className="mt-24 space-y-16">
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
