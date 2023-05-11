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
                keyboardCallback={setKeyboardDisabledState}
                displayWordArray={displayWordArray} displayWordArrayCallback={setDisplayWordArray}
                chosenWordCallback={setChosenWord}
                mistakeCount={mistakeCount} mistakeCountCallback={setMistakeCount}
                wordStyle={wordStyle} wordStyleCallback={setWordSyle}
                guessDisabledStateCallback={setGuessDisabledState} />

            <Keyboard keyboardState={keyboardDisabledState} keyboardCallback={setKeyboardDisabledState}
                displayWordArray={displayWordArray} displayWordArrayCallback={setDisplayWordArray}
                chosenWord={chosenWord}
                mistakeCount={mistakeCount} mistakeCountCallback={setMistakeCount}
                wordStyleCallback={setWordSyle}
                guessDisabledStateCallback={setGuessDisabledState} />

            {/* bonus */}
            <Guess keyboardCallback={setKeyboardDisabledState}
                displayWordArrayCallback={setDisplayWordArray}
                chosenWord={chosenWord}
                mistakeCountCallback={setMistakeCount}
                wordStyleCallback={setWordSyle}
                guessDisabledState={guessDisabledState} guessDisabledStateCallback={setGuessDisabledState} />

        </div>
    );

}

export default App;
