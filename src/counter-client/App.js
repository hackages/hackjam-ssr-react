import React from 'react';
import {Header} from '../shared/Header';
import {Body} from '../shared/Body';
import {Counter} from './Counter';
import {Images} from '../shared/Images';

export const App = () => (
  <div className="App">
    <Header />
    <Body>
      <Counter />
      <Images />
    </Body>
  </div>
);
