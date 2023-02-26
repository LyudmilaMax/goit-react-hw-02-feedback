import Notification from '../Notification/Notification';
import { BoxStatistics, Item, ItemCount, Message } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics ({ good, neutral, bad, total, positivePercentage }) {
  return (
    <BoxStatistics>
      {!(total === 0) ? (
        <>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <ItemCount>Total: {total}</ItemCount>
          <ItemCount>Positive feedback: {positivePercentage} %</ItemCount>
        </>
      ) : (
        <Message>
          <Notification message="There is no feedback" />
        </Message>
      )}
    </BoxStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};


