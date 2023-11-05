import React from "react";
import Banner from "../Banner";

function VictoryBanner({ actionFunction, numOfGuesses }) {
  return (
    <Banner status="happy" actionFunction={actionFunction}>
      <p>
        <strong>Congratulations!</strong> Got it in {` `}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default VictoryBanner;
