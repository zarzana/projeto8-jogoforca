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

    // bonus
    const letterEquivalence = {
        'a': ['a', 'à', 'á', 'â', 'ã'],
        'e': ['e', 'é', 'ê'],
        'i': ['i', 'í'],
        'o': ['o', 'ó', 'ô', 'õ'],
        'u': ['u', 'ú'],
        'c': ['c', 'ç']
    };

    function letterClick(event) {

        // game logic
        function gameLogic(letter) {

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

        // disabling button after click
        const chosenLetter = event.target.innerHTML;
        let updatedKeyboardDisabledState = [...keyboardDisabledState]
        updatedKeyboardDisabledState[alphabet.indexOf(chosenLetter)] = true;
        setKeyboardDisabledState(updatedKeyboardDisabledState);

        if (Object.keys(letterEquivalence).includes(chosenLetter)) {
            let letterFound = false;
            letterEquivalence[chosenLetter].forEach(letter => {
                const letterPosition = chosenWord.indexOf(letter);
                if (letterPosition !== -1) {
                    letterFound = true;
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
            });
            if (!letterFound) {
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
        else {
            gameLogic(chosenLetter);
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
