import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function PreviousGuesses({ checkedGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} result={checkedGuesses[index]} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
