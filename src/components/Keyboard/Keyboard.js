import React from "react";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function generateMapping(checkedGuesses) {
  const letterToStatusMap = {};
  checkedGuesses.forEach((guess) => {
    // each guess is made up of 5 slots
    guess.forEach((result) => {
      const { letter, status } = result;
      letterToStatusMap[letter] = status;
    });
  });
  return letterToStatusMap;
}

function Keyboard({ checkedGuesses }) {
  const letterToStatusMap = generateMapping(checkedGuesses);

  return (
    <div className="keys">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyRow">
          {row.map((letter) => {
            return (
              <span
                key={letter}
                className={`keyCell ${letterToStatusMap[letter] || ""}`}
              >
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
