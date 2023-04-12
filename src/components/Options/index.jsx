import './styles.css'

export const Options = ({ option, isCorrect, onClick }) => {

  return (
    <button
      className="options"
      onClick={() => onClick(isCorrect)}
    >
      {option}
    </button>
  );
};