import React, { useState, useEffect } from 'react';

import './BallRunJumpGame.css';

const App = () => {
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const gravity = 0.5; // Gravity value, adjust as needed
    const jumpForce = 10; // Jump force value, adjust as needed
    const groundHeight = 200; // Ground height value, adjust as needed

    const gameLoop = setInterval(() => {
      if (isJumping) {
        setVelocity((prevVelocity) => prevVelocity - gravity);
        setPosition((prevPosition) => prevPosition + velocity);
        if (position <= 0) {
          setIsJumping(false);
          setVelocity(0);
          setPosition(0);
        }
      } else if (position < groundHeight) {
        setPosition((prevPosition) => prevPosition + velocity);
        setVelocity((prevVelocity) => prevVelocity + gravity);
        if (position >= groundHeight) {
          setPosition(groundHeight);
          setIsGameOver(true);
          clearInterval(gameLoop);
        }
      }
    }, 16);

    return () => {
      clearInterval(gameLoop);
    };
  }, [position, velocity, isJumping]);

  const handleJump = () => {
    if (!isJumping && !isGameOver) {
      setVelocity(jumpForce);
      setIsJumping(true);
    }
  };

  return (
    <div className="bg">
      
      <h1>Ball Run and Jump Game</h1>
      <div className="game-container">
        <div
          className={`ball ${isJumping ? 'jump' : ''} ${
            isGameOver ? 'game-over' : ''
          }`}
          style={{ bottom: position }}
        ></div>
        {!isJumping && !isGameOver && (
          <button className="jump-button" onClick={handleJump}>
            Jump
          </button>
        )}
      </div>
      {isGameOver && <p>Game Over!</p>}
    </div>
  );
};

export default App;