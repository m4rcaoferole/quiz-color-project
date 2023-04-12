import './styles.css';

export function History({ colorsAnswer, colorFalse, isCorrect, time }) {
  return (
    <div className='history-container'>
      <div className='color-wrapper'>
        {colorFalse && (
          <div
            style={{
              background: colorFalse,
              width: '80px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              margin: '8px 4px',
              borderRadius: '2px',
            }}
          >
            <span>{colorFalse}</span>
          </div>
        )}
        <div
          style={{
            background: colorsAnswer,
            width: '80px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            margin: '8px 4px ',
            borderRadius: '2px',
          }}
        >
          <span>{colorsAnswer}</span>
        </div>
      </div>

      <div className="time-answer">
        <span>{isCorrect}</span>
        <span className="time">{time}s</span>
      </div>
    </div>
  );
}
