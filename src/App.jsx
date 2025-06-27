// src/App.jsx

import DrumPad from './DrumPad';
import './App.css';

function App() {
  const drumPads = [
    { label: "Q", audio: '/sounds/clap.mp3' },
    { label: "W", audio: '/sounds/hihat.mp3' },
    { label: "E", audio: '/sounds/kick.mp3' },
    { label: "A", audio: '/sounds/snare-1.mp3' },
    { label: "S", audio: '/sounds/snare-2.mp3' },
    { label: "D", audio: '/sounds/snare-3.mp3' }
  ];

  return (
    <div className="drum-machine">
      <h1>🥁 React Drum Machine</h1>
      <div className="pad-grid">
        {drumPads.map((pad, index) => (
          <DrumPad key={index} label={pad.label} audioSrc={pad.audio} />
        ))}
      </div>
    </div>
  );
}

export default App;
