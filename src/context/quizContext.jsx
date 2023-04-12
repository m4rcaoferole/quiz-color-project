import { createContext, useEffect, useState } from 'react';

export const QuizContext = createContext({});

export function QuizContextProvider({ children }) {
  const [game, setGame] = useState('START');
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(localStorage.getItem('maxScore') || 0);

  const [timeStamp, setTimeStamp] = useState(30);
  const [timeColor, setTimeColor] = useState(10);

  const [color, setColor] = useState('');
  const [options, setOptions] = useState([]);
  const [colorsAnswered, setColorsAnswered] = useState([])

  useEffect(() => {
    if (game === 'RUNNING') {
      if (timeStamp === 0) {
        setGame('START');
        setTimeColor(0);
        setScore(0)
        setColor('')
        setOptions([])
      }

      if (timeColor === 0) {
        setScore(score - 2);
        generateRandomColor();
      }

      const interval = timeColor > 0 && setInterval(() => {
          setTimeColor(timeColor - 1);
          setTimeStamp(timeStamp - 1);
        }, 1000);

      return () => clearInterval(interval);
    }
  }, [game, timeColor]);

  useEffect(() => {
    if (score > maxScore) {
      setMaxScore(score);
      localStorage.setItem('maxScore', score);
    }
  }, [score, maxScore]);

  const generateRandomColor = () => {
    const currentColor = ` #${Math.floor(Math.random() * 16777215).toString(16).toLocaleUpperCase()}`;
    const correctOption = currentColor;

    const incorrectOption1 = ` #${Math.floor(Math.random() * 16777215).toString(16).toLocaleUpperCase()}`;
    const incorrectOption2 = ` #${Math.floor(Math.random() * 16777215).toString(16).toLocaleUpperCase()}`;

    const options = shuffleArray([
      correctOption,
      incorrectOption1,
      incorrectOption2,
    ]);

    setColor(currentColor);
    setOptions(options);
    setTimeColor(10);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  };

  const handleAnswer = (colorCurrent) => {
    if (colorCurrent === color) {
      setScore((prevScore) => prevScore + 5);
      setColorsAnswered([...colorsAnswered, { color: color, isCorrect: true, time: 10 - timeColor }]);
    } else {
      setScore((prevScore) => prevScore - 1);
      setColorsAnswered([...colorsAnswered, { color: colorCurrent, isCorrect: false, time: 10 - timeColor }]);
    }

    generateRandomColor();
  };

  const handleStartGame = () => {
    setGame(`RUNNING`);
    generateRandomColor();
    setTimeStamp(30);
  };

  const handleRestartGame = () => {
    const restart = confirm(`Do you want to start over?`)
    
    if (restart === true) {
      setGame(`RUNNING`);
      setTimeStamp(30);
      generateRandomColor();
      setScore(0);
      setColorsAnswered([])
    }
  };

  const handleResetDataGame = () => {
    const restart = confirm(`Resetting will erase all game data!`)
    
    if (restart === true) {
      localStorage.clear();
      setGame(`START`);
      setTimeStamp(30);
      setOptions([])
      setColor('');
      setScore(0);
      setMaxScore(0)
      setColorsAnswered([])
    }
  };


  return (
    <QuizContext.Provider
      value={{
        game,
        color,
        score,
        options,
        maxScore,
        timeColor,
        timeStamp,
        colorsAnswered,
        handleAnswer,
        handleStartGame,
        handleResetDataGame,
        handleRestartGame,
        generateRandomColor,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
