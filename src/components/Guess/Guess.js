import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ result }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={result && result[index].letter}
          status={result && result[index].status}
        />
      ))}
    </p>
  );
}

export default Guess;
