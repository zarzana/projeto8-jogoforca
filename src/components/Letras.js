function Keyboard(props) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const keyboardDisabledState = props.keyboardState;
    const setKeyboardDisabledState = props.keyboardCallback;

    const displayWordArray = props.displayWordArray;
    const setDisplayWordArray = props.displayWordArrayCallback;
    const chosenWord = props.chosenWord;

    const mistakeCount = props.mistakeCount;
    const setMistakeCount = props.mistakeCountCallback;

    const setWordSyle = props.wordStyleCallback;

    // bonus
    const setGuessDisabledState = props.guessDisabledStateCallback;

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
            // win condition
            if (updatedDisplayWordArray.indexOf('_') === -1) {
                setKeyboardDisabledState(Array(26).fill(true));
                setWordSyle({ color: "green" });
                // bonus
                setGuessDisabledState(true);
            }
        }
        else {
            // lose condition
            const updatedmistakeCount = mistakeCount + 1;
            if (updatedmistakeCount === 6) {
                setKeyboardDisabledState(Array(26).fill(true));
                setDisplayWordArray(Array(chosenWord));
                setWordSyle({ color: "red" });
                // bonus
                setGuessDisabledState(true);
            }
            setMistakeCount(updatedmistakeCount);
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
