import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [key, setKey] = useState("pending...");
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const sounds = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open HH",
    Z: "Kick n' Hat",
    X: "Kick",
    C: "Closed HH",
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line
  }, []);

  const playSound = (key) => {
    const sound = document.getElementById(key);
    sound.volume = volume;
    sound.currentTime = 0;
    setKey(sounds[key]);
    sound.play();
  };

  const handleButtonClick = (e) => {
    let click = e.target.value.replace("Key", "");
    playSound(click);
  };

  const handleKeyPress = (e) => {
    let key = e.code.replace("Key", "");
    playSound(key);
  };

  const handleVolume = (e) => {
    !muted && setVolume(e.target.value);
  };

  const handleMute = () => {
    setMuted(!muted);
    if (muted) {
      setVolume(0.5);
    } else {
      setVolume(0);
    }
  };

  return (
    <div id="drum-machine">
      <div id="display">
        <table className="styled-table">
          <h2>Drum Machine</h2>
          <hr />
          <h2> {key}</h2>
          <tbody>
            <tr>
              <td>
                <button
                  className="btn btn-default drum-pad"
                  id="Heater-1"
                  onClick={(e) => handleButtonClick(e)}
                  value="KeyQ"
                >
                  <audio
                    className="clip"
                    id="Q"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                  />
                  Q
                </button>
              </td>
              <td>
                <button
                  className="btn btn-default drum-pad"
                  id="Heater-2"
                  onClick={(e) => handleButtonClick(e)}
                  value="KeyW"
                >
                  <audio
                    className="clip"
                    id="W"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                  />
                  W
                </button>
              </td>
              <td>
                <button
                  className="btn btn-default drum-pad"
                  id="Heater-3"
                  onClick={(e) => handleButtonClick(e)}
                  value="KeyE"
                >
                  <audio
                    className="clip"
                    id="E"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                  />
                  E
                </button>
              </td>
            </tr>
            <tr id="row">
              <td>
                <button
                  className="btn btn-default drum-pad"
                  id="Heater-4"
                  onClick={(e) => handleButtonClick(e)}
                  value="KeyA"
                >
                  <audio
                    className="clip"
                    id="A"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                  />
                  A
                </button>
              </td>
              <td>
                <button
                  className="btn btn-default drum-pad"
                  id="Clap"
                  onClick={(e) => handleButtonClick(e)}
                  value="KeyS"
                >
                  <audio
                    className="clip"
                    id="S"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                  />
                  S
                </button>
              </td>
              <td>
                <button
                  className="btn btn-default drum-pad"
                  id="Open-HH"
                  onClick={(e) => handleButtonClick(e)}
                  value="KeyD"
                >
                  <audio
                    className="clip"
                    id="D"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                  />
                  D
                </button>
              </td>
            </tr>
            <tr id="row">
              <td>
                <button
                  className="btn btn-default drum-pad"
                  id="Kick-n-Hat"
                  onClick={(e) => handleButtonClick(e)}
                  value="KeyZ"
                >
                  <audio
                    className="clip"
                    id="Z"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                  />
                  Z
                </button>
              </td>
              <td>
                <button
                  className="btn btn-default drum-pad"
                  id="Kick"
                  onClick={(e) => handleButtonClick(e)}
                  value="KeyX"
                >
                  <audio
                    className="clip"
                    id="X"
                    src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                  />
                  X
                </button>
              </td>
              <td>
                <button
                  className="btn btn-default drum-pad"
                  id="Closed-HH"
                  onClick={(e) => handleButtonClick(e)}
                  value="KeyC"
                >
                  <audio
                    className="clip"
                    id="C"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                  />
                  C
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="range"
                  min="0"
                  max="1"
                  value={volume}
                  onChange={(e) => handleVolume(e)}
                  step="0.01"
                />
              </td>
              <td>
                <button id="mute" onClick={handleMute}>
                  {muted ? (
                    <i className="fa-solid fa-volume-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-music"></i>
                  )}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer">
        &copy; Copyright by Crypt0zauruS
        <h1>
          Follow me on{" "}
          <a
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/CryptosaurusRe4"
          >
            <i className="fab fa-twitter"></i>
          </a>{" "}
          and{" "}
          <a
            className="github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Crypt0zauruS"
          >
            <i className="fab fa-github"></i>
          </a>
        </h1>
      </div>
    </div>
  );
}
export default App;
