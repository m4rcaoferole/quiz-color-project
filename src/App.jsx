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
          {colorsAnswered.map((color) => (
            <History
              key={color.color}
              colorsAnswer={color.color}
              isCorrect={color.isCorrect ? `✅` : `❌`}
              time={color.time}
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
