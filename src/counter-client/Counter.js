import React, {Component} from 'react';
import {CounterButtons} from '../shared/CounterButtons';
import {CounterText} from '../shared/CounterText';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1});
  };

  decrement = () => {
    this.setState({counter: this.state.counter - 1});
  };

  render() {
    return (
      <div>
        <CounterButtons increment={this.increment} decrement={this.decrement} />
        <CounterText counter={this.state.counter} />
      </div>
    );
  }
}
