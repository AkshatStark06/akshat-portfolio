import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import Skills from "./pages/recruiter/Skills";
import Experience from "./pages/recruiter/Experience";
import Projects from "./pages/recruiter/Projects";
import Certifications from "./pages/recruiter/Certifications";
import Resume from "./pages/shared/Resume";
import Contact from "./pages/shared/Contact";
import Github from "./pages/shared/Github";
import LinkedIn from "./pages/shared/LinkedIn";


function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile/:type" element={<Profile />} />
        <Route path="/profile/recruiter/skills" element={<Skills />} />
        <Route path="/profile/recruiter/experience" element={<Experience />} />
        <Route path="/profile/recruiter/projects" element={<Projects />} />
        <Route path="/profile/recruiter/certifications" element={<Certifications />} />

        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<Github />} />
        <Route path="/linkedin" element={<LinkedIn />} />

      </Routes>
    </div>
  );
}

export default App;
