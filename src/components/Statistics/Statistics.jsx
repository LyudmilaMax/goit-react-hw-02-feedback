import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section>
      <div>
        {!(total === 0) ? (
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage} %</li>
          </ul>
        ) : (
          <Notification />
        )}
      </div>
    </section>
  );
};

export default Statistics;
