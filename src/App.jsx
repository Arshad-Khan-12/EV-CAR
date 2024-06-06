import Background from "./components/background/Background";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  let heroData = [
    { text1: "Dive into the world of", text2: "luxury cars" },
    { text1: "Drive the future with", text2: "your cars" },
    { text1: "Experience the luxury of", text2: "your cars" },
  ];
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        heroData={heroData[heroCount]}
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
