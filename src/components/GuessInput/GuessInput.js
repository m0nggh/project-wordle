import React from "react";

function GuessInput() {
  const [inputText, setInputText] = React.useState("");

  const handleInputText = (event) => {
    const nextText = event.target.value;
    setInputText(nextText.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputText);
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={inputText}
        onChange={handleInputText}
        maxLength="5"
        minLength="5"
        pattern="[a-zA-Z]{5}"
      ></input>
    </form>
  );
}

export default GuessInput;
