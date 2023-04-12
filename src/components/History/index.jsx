import './styles.css'

export function History({ colorsAnswer, isCorrect, time }) {

  const style = {
    background: colorsAnswer,
    width: '100px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    margin: '10px 5px ',
    borderRadius: '6px',
  };

  return (
    <div className="history-container">
      <div style={style}>
        <span>{colorsAnswer}</span>
      </div>
      <span>{isCorrect}</span>
      <span>{time} s</span>
    </div>
  );
}
