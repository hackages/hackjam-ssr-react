import React from 'react';
import PropTypes from 'prop-types';

export const CounterButtons = ({increment, decrement}) => (
  <div className="counter-buttons">
    <button onClick={increment}> + </button>
    <button onClick={decrement}> - </button>
  </div>
);

CounterButtons.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};
