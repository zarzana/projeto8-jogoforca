import { useState } from "react";
import forca0 from "../assets/forca0.png";
// import forca1 from "../assets/forca1.png";
// import forca2 from "../assets/forca2.png";
// import forca3 from "../assets/forca3.png";
// import forca4 from "../assets/forca4.png";
// import forca5 from "../assets/forca5.png";
// import forca6 from "../assets/forca6.png";

function Game(props) {

    const setKeyboardDisabledState = props.keyboardCallback;
    const words = props.words;

    let [displayWordArray, setDisplayWordArray] = useState([]);

    function buttonClick() {
        setKeyboardDisabledState(Array(26).fill(false));
        const word = words[Math.floor(Math.random() * words.length)];
        setDisplayWordArray(Array(word.length).fill('_'));
    }

    return (
        <div className="Game">
            <img src={forca0} alt="" data-test="game-image" />
            <div>
                <button onClick={buttonClick} data-test="choose-word">Escolher Palavra</button>
                <p data-test="word">{displayWordArray.join(' ')}</p>
            </div>
        </div>
    );

}

export default Game;
