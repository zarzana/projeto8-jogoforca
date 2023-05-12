import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

function Game(props) {

    const hangmanImages = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    const setKeyboardDisabledState = props.setKeyboardDisabledState;
    const words = props.words;

    const displayWordArray = props.displayWordArray;
    const setDisplayWordArray = props.setDisplayWordArray;
    const setChosenWord = props.setChosenWord;

    const mistakeCount = props.mistakeCount;
    const setMistakeCount = props.setMistakeCount;

    const wordStyle = props.wordStyle;
    const setWordSyle = props.setWordSyle;

    // bonus
    const setGuessDisabledState = props.setGuessDisabledState;

    function buttonClick() {
        setKeyboardDisabledState(Array(26).fill(false));
        const word = words[Math.floor(Math.random() * words.length)];
        setChosenWord(word);
        setDisplayWordArray(Array(word.length).fill('_'));
        // bonus
        setMistakeCount(0);
        setWordSyle({ color: "black" })
        setGuessDisabledState(false);
    }

    return (
        <div className="Game">
            <img src={hangmanImages[mistakeCount]} alt="" data-test="game-image" />
            <div>
                <button onClick={buttonClick} data-test="choose-word">Escolher Palavra</button>
                <p style={wordStyle} data-test="word">{displayWordArray.join(' ')}</p>
            </div>
        </div>
    );

}

export default Game;
