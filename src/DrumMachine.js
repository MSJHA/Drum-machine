import React, { useEffect } from 'react';
import './DrumMachine.css';


const drumPads = [
  { key: 'Q', id: 'Heater-1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { key: 'S', id: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', id: 'Kick-n\'-Hat', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', id: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];

const DrumMachine = () => {
  const [display, setDisplay] = React.useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      const pad = drumPads.find(p => p.key === event.key.toUpperCase());
      if (pad) {
        playSound(pad.id);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const playSound = (id) => {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
    setDisplay(id);
  };

  return (
    <div id="drum-machine" className="container">
      <div id="display" className="display">{display}</div>
      <div className="pads">
        {drumPads.map(pad => (
          <div
            key={pad.id}
            id={pad.id}
            className="drum-pad"
            onClick={() => playSound(pad.key)}
          >
            {pad.key}
            <audio
              className="clip"
              id={pad.key}
              src={pad.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
