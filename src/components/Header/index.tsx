import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./style.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="header">
      <AnimatedLetters
        idx={2}
        letterClass={letterClass}
        styles={{ fontSize: 40, fontWeight: 600 }}
        strArray={"ONLINE SHOPPING STORE".split("")}
      />
    </div>
  );
};

export default Home;
