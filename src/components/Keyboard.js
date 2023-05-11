function Keyboard(props) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const keyboardDisabledState = props.keyboardState;
    const setKeyboardDisabledState = props.keyboardCallback;

    const displayWordArray = props.displayWordArray;
    const setDisplayWordArray = props.displayWordArrayCallback;
    const chosenWord = props.chosenWord;

    const mistakeCount = props.mistakeCount;
    const setMistakeCount = props.mistakeCountCallback;

    function letterClick(event) {

        // disabling button after click
        const letter = event.target.innerHTML;
        let updatedKeyboardDisabledState = [...keyboardDisabledState]
        updatedKeyboardDisabledState[alphabet.indexOf(letter)] = true;
        setKeyboardDisabledState(updatedKeyboardDisabledState);

        // game logic
        if (chosenWord.indexOf(letter) !== -1) {
            let updatedDisplayWordArray = [...displayWordArray];
            let i = -1; while ((i = chosenWord.indexOf(letter, i + 1)) !== -1) { updatedDisplayWordArray[i] = letter }
            setDisplayWordArray(updatedDisplayWordArray);
        }
        else {
            setMistakeCount(mistakeCount + 1);
        }

    }

    return (
        <div className="Keyboard">
            {alphabet.map((letter, i) => <Letter key={letter} letter={letter}
                clickHandler={letterClick} state={keyboardDisabledState[i]} />)}
        </div>
    );

}

function Letter(props) {
    return (
        <div className="Letter">
            <button disabled={props.state} onClick={props.clickHandler} data-test="letter">{props.letter}</button>
        </div>
    )
}

export default Keyboard;
