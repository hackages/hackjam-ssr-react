import React from 'react';
import {Body} from '../shared/Body';
import {Counter} from './Counter';
import {Images} from '../shared/Images';
import {Header} from '../shared/Header';

export const App = () => (
  <div className="App">
    <Header />
    <Body>
      <Counter />
      <Images />
    </Body>
  </div>
);
