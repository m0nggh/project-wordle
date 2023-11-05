import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";
import VictoryBanner from "../VictoryBanner";
import DefeatBanner from "../DefeatBanner";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

const PENDING_STATUS = "Pending";
const VICTORY_STATUS = "Victory";
const DEFEAT_STATUS = "Defeat";

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState(PENDING_STATUS);

  // generates a new word upon every restart
  const [answer, setAnswer] = useState(() => {
    const initialAnswer = sample(WORDS);
    console.info({ initialAnswer });
    return initialAnswer;
  });

  const inputRef = useRef();

  const handleRestart = useCallback(() => {
    // choose new word, reset guesses, reset games status
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus(PENDING_STATUS);
    // To make debugging easier, we'll log the solution in the console.
    console.info({ newAnswer });
  }, []);

  // focus on input field whenever restart game is triggered
  useEffect(() => {
    // sanity check
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [answer]);

  const addToGuesses = useCallback(
    (guess) => {
      const nextGuesses = [...guesses, guess];
      // validate answer
      if (guess === answer) {
        setGameStatus(VICTORY_STATUS);
      } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
        setGameStatus(DEFEAT_STATUS);
      }
      setGuesses(nextGuesses);
    },
    [answer, guesses]
  );

  // validate the guesses to be used instead
  const checkedGuesses = useMemo(
    () => guesses.map((guess) => checkGuess(guess, answer)),
    [guesses, answer]
  );

  return (
    <>
      <PreviousGuesses checkedGuesses={checkedGuesses}></PreviousGuesses>

      <GuessInput
        ref={inputRef}
        addToGuesses={addToGuesses}
        gameStatus={gameStatus}
      />

      {gameStatus === VICTORY_STATUS && (
        <VictoryBanner
          actionFunction={handleRestart}
          numOfGuesses={guesses.length}
        />
      )}
      {gameStatus === DEFEAT_STATUS && (
        <DefeatBanner actionFunction={handleRestart} answer={answer} />
      )}

      <Keyboard checkedGuesses={checkedGuesses} />
    </>
  );
}

export default Game;
