import { useRef } from "react";

function Guess(props) {

    const setKeyboardDisabledState = props.setKeyboardDisabledState;

    const setDisplayWordArray = props.setDisplayWordArray;
    const chosenWord = props.chosenWord;

    const setMistakeCount = props.setMistakeCount;
    const setWordSyle = props.setWordSyle;

    const guessDisabledState = props.guessDisabledState;
    const setGuessDisabledState = props.setGuessDisabledState;
    
    const inputRef = useRef(null);

    function guessClick() {
        const guessInput = inputRef.current.value.toLowerCase();
        // win condition
        if (guessInput === chosenWord) {
            setKeyboardDisabledState(Array(26).fill(true));
            setDisplayWordArray(Array(chosenWord));
            setWordSyle({ color: "green" });
            setGuessDisabledState(true);
        }
        else {
            setKeyboardDisabledState(Array(26).fill(true));
            setDisplayWordArray(Array(chosenWord));
            setWordSyle({ color: "red" });
            setGuessDisabledState(true);
            setMistakeCount(6);
        }
    }

    return (
        <div className="Guess">
            <p>Já sei a palavra!</p>
            <input type="text" disabled={guessDisabledState} ref={inputRef} data-test="guess-input"></input>
            <button disabled={guessDisabledState} onClick={guessClick} data-test="guess-button">Chutar</button>
        </div>
    );

}

export default Guess;
