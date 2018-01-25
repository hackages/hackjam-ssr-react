import React from 'react';
import small from '../images/small.png';
import big from '../images/big.jpg';

export class Images extends React.Component {
  render() {
    return (
      <div className="images">
        <div className="card">
          <img src={small} alt="Small" />
        </div>

        <div className="card">
          <img src={big} alt="Big" />
        </div>
      </div>
    );
  }
}
