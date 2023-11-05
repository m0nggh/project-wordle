import { forwardRef, useCallback, useState } from "react";

function GuessInput({ addToGuesses, gameStatus }, ref) {
  const [inputText, setInputText] = useState("");

  const handleInputText = useCallback((event) => {
    const nextText = event.target.value;
    setInputText(nextText.toUpperCase());
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      addToGuesses(inputText);
      setInputText("");
    },
    [inputText, addToGuesses]
  );

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
        ref={ref}
      />
    </form>
  );
}

export default forwardRef(GuessInput);
