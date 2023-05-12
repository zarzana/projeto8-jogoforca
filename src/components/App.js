import { useState } from "react";
import Game from "./Jogo";
import Keyboard from "./Letras";
import palavras from "../palavras";
import Guess from "./Chute";

const words = palavras;

function App() {

    const [keyboardDisabledState, setKeyboardDisabledState] = useState(Array(26).fill(true));
    const [displayWordArray, setDisplayWordArray] = useState([]);
    const [chosenWord, setChosenWord] = useState(undefined);
    const [mistakeCount, setMistakeCount] = useState(0);
    const [wordStyle, setWordSyle] = useState({ color: "black" });

    // bonus
    const [guessDisabledState, setGuessDisabledState] = useState(true);

    return (
        <div className="App">

            <Game words={words}
                setKeyboardDisabledState={setKeyboardDisabledState}
                displayWordArray={displayWordArray} setDisplayWordArray={setDisplayWordArray}
                setChosenWord={setChosenWord}
                mistakeCount={mistakeCount} setMistakeCount={setMistakeCount}
                wordStyle={wordStyle} setWordSyle={setWordSyle}
                setGuessDisabledState={setGuessDisabledState} />

            <Keyboard keyboardState={keyboardDisabledState} setKeyboardDisabledState={setKeyboardDisabledState}
                displayWordArray={displayWordArray} setDisplayWordArray={setDisplayWordArray}
                chosenWord={chosenWord}
                mistakeCount={mistakeCount} setMistakeCount={setMistakeCount}
                setWordSyle={setWordSyle}
                setGuessDisabledState={setGuessDisabledState} />

            {/* bonus */}
            <Guess setKeyboardDisabledState={setKeyboardDisabledState}
                setDisplayWordArray={setDisplayWordArray}
                chosenWord={chosenWord}
                setMistakeCount={setMistakeCount}
                setWordSyle={setWordSyle}
                guessDisabledState={guessDisabledState} setGuessDisabledState={setGuessDisabledState} />

        </div>
    );

}

export default App;
