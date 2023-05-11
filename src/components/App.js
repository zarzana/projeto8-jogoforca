import { useState } from "react";
import Game from "./Game";
import Keyboard from "./Keyboard";
import palavras from "../palavras";

const words = palavras;

function App() {

    const [keyboardDisabledState, setKeyboardDisabledState] = useState(Array(26).fill(true));
    // const [mistakeCount, setMistakeCount] = useState(0);

    return (
        <div className="App">
            <Game words={words} keyboardCallback={setKeyboardDisabledState} />
            <Keyboard keyboardState={keyboardDisabledState} keyboardCallback={setKeyboardDisabledState} />
        </div>
    );

}

export default App;
