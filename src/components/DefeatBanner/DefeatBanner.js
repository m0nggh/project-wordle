import React from "react";
import Banner from "../Banner/";

function DefeatBanner({ actionFunction, answer }) {
  return (
    <Banner status="sad" actionFunction={actionFunction}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default DefeatBanner;
