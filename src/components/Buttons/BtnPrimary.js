import React, { useState } from "react";
import { Howl } from "howler";

import congratulation from '../../Assets/Audios/congratulations.mp3';
import gameOver from '../../Assets/Audios/game-over.mp3';

function BtnPrimary({ title, titleReset }) {
  const [num, setNum] = useState(0);
  const [option1, setOption1] = useState(3);
  const [option2, setOption2] = useState(4);

    const handleReset = () => {
      const num1 = setNum(0) 
      const num2 = setOption1(0)
      const num3 = setOption2(0)
        return [ num1, num2, num3 ]
    }

  function randomNumberInRange(min, max) {
    let correctOtion = Math.floor(Math.random() * (max - min + 1)) + min;
    return correctOtion;
  }
  function randomNumber1(min, max) {
    let correctOtion = Math.floor(Math.random() * (max - min + 1)) + min;
    return correctOtion;
  }
  function randomNumber2(min, max) {
    let correctOtion = Math.floor(Math.random() * (max - min + 1)) + min;
    return correctOtion;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 10));
    setOption1(randomNumber1(1,10))
    setOption2(randomNumber1(1,10))
  };

  const callMySound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <div>
      <button className="btnPrimary" onClick={handleClick}>
        {title}
      </button>
        <h3>Options are:</h3>  
      <ul className="lists">
        <li className="list" onClick={() => callMySound(gameOver)}>{option1}</li>  
        <li className="list" onClick={() => callMySound(congratulation)}>{num}</li>  
        <li className="list" onClick={() => callMySound(gameOver)}>{option2}</li>  
      </ul>

      <div className="btnReset" onClick={handleReset}>
            {titleReset}
      </div>
    </div>
  );
}

export default BtnPrimary;
