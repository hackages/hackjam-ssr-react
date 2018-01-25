import React from 'react';
import PropTypes from 'prop-types';

export const CounterText = ({counter}) => (
  <div className="counter-text">{counter}</div>
);

CounterText.defaultProps = {
  counter: 0
};

CounterText.propTypes = {
  counter: PropTypes.number
};
