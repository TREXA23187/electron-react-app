import React, { useEffect, useRef, useState } from 'react';
import './index.css';

function GameTank() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillRect(0, 0, 800, 600);
    ctx.fillStyle = '#000';

    const timeout = setInterval(() => {
      ctx.clearRect(0, 0, 800, 600);

      for (let i = 0; i < 5000; i++) {
        ctx.beginPath();
        ctx.strokeStyle = '#fff';
        ctx.arc(
          Math.random() * 800,
          Math.random() * 600,
          0.5,
          0,
          2 * Math.PI * 0.5
        );
        ctx.stroke();
      }

      return () => {
        console.log('-=-=-=-=-quit-=-=-=-=-=-');
        clearInterval(timeout);
      };
    }, [500]);
  }, []);

  return (
    <div>
      <div className='canvas-dom'>
        <canvas
          ref={canvasRef}
          style={{
            width: 800,
            height: 569,
          }}
        ></canvas>
      </div>
      <div className='button-group'>
        <button className='enter-button common-button'>进入游戏</button>
        <button className='quit-button common-button'>退出游戏</button>
      </div>
    </div>
  );
}

export default GameTank;
