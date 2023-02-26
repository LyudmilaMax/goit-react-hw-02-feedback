import { SectionMain, Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <SectionMain>
      <Title>{title}</Title>
      {children}
    </SectionMain>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
