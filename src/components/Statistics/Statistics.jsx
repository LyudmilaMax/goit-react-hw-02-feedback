import { BoxStatistics, Item, ItemCount } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <BoxStatistics>
      <>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <ItemCount>Total: {total}</ItemCount>
        <ItemCount>Positive feedback: {positivePercentage} %</ItemCount>
      </>
    </BoxStatistics>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
