// src/DrumPad.jsx

function DrumPad({ label, audioSrc }) {
    const playSound = () => {
        const audio = new Audio(audioSrc);
        audio.play();
    };

    return (
        <button className="drum-pad" onClick={playSound}>
            {label}
        </button>
    );
}

export default DrumPad;
