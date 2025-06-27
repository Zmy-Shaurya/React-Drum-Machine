// src/App.jsx

import DrumPad from './DrumPad';
import './App.css';

function App() {
  const drumPads = [
    { label: "Clap", audio: '/sounds/clap.mp3' },
    { label: "Hi-Hat", audio: '/sounds/hihat.mp3' },
    { label: "Kick", audio: '/sounds/kick.mp3' },
    { label: "Snare-1", audio: '/sounds/snare-1.mp3' },
    { label: "Snare-2", audio: '/sounds/snare-2.mp3' },
    { label: "Snare-3", audio: '/sounds/snare-3.mp3' },
    { label: "Tom-1", audio: '/sounds/tom-1.mp3' },
    { label: "Tom-2", audio: '/sounds/tom-2.mp3' },
    { label: "Crash Cymball", audio: '/sounds/crash-cymball.mp3' },
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
