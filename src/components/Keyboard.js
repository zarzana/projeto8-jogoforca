function Keyboard() {

    const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="Keyboard">
            {letterArray.map((letter) => <Letter key={letter} letter={letter} />)}
        </div>
    );
}

function Letter(props) {
    return (
        <div className="Letter">
            <button>{props.letter}</button>
        </div>
    )
}

export default Keyboard;
