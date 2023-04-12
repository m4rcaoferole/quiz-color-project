import { useContext } from 'react';
import Quiz from './page/Quiz';
import { QuizContext } from './context/quizContext';

import './global.css';
import { History } from './components/History';
import { Header } from './components/Header';

function App() {
  const { colorsAnswered, handleResetDataGame } = useContext(QuizContext);

  return (
    <div className="layout-container">
      <div className="layout">
        <div className="latest-game">
          <h2>Current/Latest Game</h2>
          <table>
            <thead>
              <tr>
                <th>Guessed color</th>
                <th>Correct color</th>
                <th>Score</th>
              </tr>
            </thead>
          </table>
          {colorsAnswered.map((answered) => (
            <History
              key={answered.color}
              colorsAnswer={answered.color}
              colorFalse={answered.colorFalse}
              isCorrect={answered.isCorrect ? `✅` : `❌`}
              time={answered.time}
            />
          )).reverse()}
        </div>

        <div className="content">
          <Header />

          <Quiz />

          <footer>
            <button onClick={handleResetDataGame}>
              Reset all data
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
