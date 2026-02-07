import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile/:type" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
