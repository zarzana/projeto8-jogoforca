function Keyboard() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className="Keyboard">
            {alfabeto.map((letter) => <Letter key={letter} letter={letter} />)}
        </div>
    );
}

function Letter(props) {
    return (
        <div className="Letter">
            <button disabled>{props.letter}</button>
        </div>
    )
}

export default Keyboard;
