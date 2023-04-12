import { useContext } from 'react';
import { QuizContext } from '../../context/quizContext';
import { Options } from '../../components/Options';

import './styles.css';

function Quiz() {
  const { game, color, options, timeColor, handleAnswer } = useContext(QuizContext);

  const style = {
    background: color,
    width: '300px',
    height: '200px',
  };

  return (
    <div className="container">
      {game === `RUNNING`
        ? (<div className="time-color">
          Timer Color <span>{timeColor}</span>
        </div>
        ) : (<div className="time-color">
          Press start to play!
          </div>
        )}

      {color && <div style={style}></div>}

      <div className="box-option">
        {options.map((option, index) => (
          <Options key={index} option={option} isCorrect={option} onClick={handleAnswer} />
        ))}
      </div>

      
    </div>
  );
}

export default Quiz;
