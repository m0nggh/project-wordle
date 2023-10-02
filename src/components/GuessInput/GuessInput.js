import React from "react";

function GuessInput({ addToGuesses, gameStatus }) {
  const [inputText, setInputText] = React.useState("");

  const handleInputText = (event) => {
    const nextText = event.target.value;
    setInputText(nextText.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToGuesses(inputText);
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== "Pending"}
        required
        id="guess-input"
        type="text"
        value={inputText}
        onChange={handleInputText}
        maxLength="5"
        minLength="5"
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
