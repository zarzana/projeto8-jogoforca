function Keyboard(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const keyboardDisabledState = props.keyboardState;
    // const setKeyboardDisabledState = props.keyboardCallback;

    return (
        <div className="Keyboard">
            {alfabeto.map((letter, i) => <Letter key={letter} letter={letter} state={keyboardDisabledState[i]} />)}
        </div>
    );
}

function Letter(props) {
    return (
        <div className="Letter">
            <button disabled={props.state} data-test="letter">{props.letter}</button>
        </div>
    )
}

export default Keyboard;
