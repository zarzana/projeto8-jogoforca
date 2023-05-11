import { useState } from "react";
import Game from "./Game";
import Keyboard from "./Keyboard";
import palavras from "../palavras";

const words = palavras;

function App() {

    const [keyboardDisabledState, setKeyboardDisabledState] = useState(Array(26).fill(true));
    const [displayWordArray, setDisplayWordArray] = useState([]);
    const [chosenWord, setChosenWord] = useState(undefined);
    const [mistakeCount, setMistakeCount] = useState(0);

    return (
        <div className="App">
            <Game words={words}
                keyboardCallback={setKeyboardDisabledState}
                displayWordArray={displayWordArray} displayWordArrayCallback={setDisplayWordArray}
                chosenWordCallback={setChosenWord}
                mistakeCount={mistakeCount} />
            <Keyboard keyboardState={keyboardDisabledState} keyboardCallback={setKeyboardDisabledState}
                displayWordArray={displayWordArray} displayWordArrayCallback={setDisplayWordArray}
                chosenWord={chosenWord}
                mistakeCount={mistakeCount} mistakeCountCallback={setMistakeCount} />
        </div>
    );

}

export default App;
