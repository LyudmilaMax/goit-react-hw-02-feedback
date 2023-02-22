const Feedback = ({ onLeaveFeedback }) => {
  return (
    <section>
      <div>
        <button
          type="button"
          onClick={() => {
            onLeaveFeedback('good');
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            onLeaveFeedback('neutral');
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            onLeaveFeedback('bad');
          }}
        >
          Bad
        </button>
      </div>
    </section>
  );
};

export default Feedback;
