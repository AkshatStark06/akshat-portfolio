import { createContext, useContext, useRef } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const audioRef = useRef(new Audio("/music/ambient.mp3"));

  const playMusic = () => {
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    audioRef.current.play();
  };

  return (
    <AudioContext.Provider value={{ playMusic }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);
