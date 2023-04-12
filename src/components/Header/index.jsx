import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext';

import './styles.css';

export function Header() {
  const {
    game,
    score,
    maxScore,
    timeStamp,
    handleStartGame,
    handleRestartGame
  } = useContext(QuizContext);

  return (
    <div className="header">
      <h1>Guess the color</h1>

      <div className="menu-time">
        <span className="time-game">
          REMAINING <br /> TIME (s) <br />
          <span>{timeStamp}</span>
        </span>

        {game === 'START' ? (
          <button className="area-button" onClick={handleStartGame} >
            START
          </button>
        ) : (
          <button className="area-button" onClick={handleRestartGame}>RESTART</button>
        )}

        <div className="menu-score">
          <div className="high">
            HIGH <br />
            SCORE
            <span>{maxScore}</span>
          </div>

          <div className="divider"></div>

          <div className="current">
            SCORE
            <span>{score}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
