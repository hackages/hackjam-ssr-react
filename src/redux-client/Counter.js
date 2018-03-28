import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCounter} from './redux/actions';
import {CounterButtons} from '../shared/CounterButtons';
import {CounterText} from '../shared/CounterText';

class _Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <CounterButtons increment={this.increment} decrement={this.decrement} />
        <CounterText counter={this.props.counter} />
      </div>
    );
  }
}

const mapStateToProps = ({counter}) => ({
  counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(changeCounter('INCREMENT')),
  decrement: () => dispatch(changeCounter('DECREMENT'))
});

export const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter);
