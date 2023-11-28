import "./index.scss";
import { AnimatedTypes } from "./types";

const AnimatedLetters = (props: AnimatedTypes) => {
  const { letterClass, strArray, idx, styles = {} } = props;

  return (
    <span style={{ ...styles }}>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
