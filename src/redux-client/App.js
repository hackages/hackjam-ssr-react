import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Counter} from './Counter';
import {Welcome} from '../shared/Welcome';
import {Images} from '../shared/Images';
import {Header} from '../shared/Header';
import {Body} from '../shared/Body';
import {NavBar} from '../shared/NavBar';

export const App = () => (
  <div className="App">
    <Header />
    <NavBar>
      <Link to="/"> Home </Link>
      <Link to="/counter"> Counter </Link>
    </NavBar>
    <Body>
      <Route exact path="/" component={Welcome} />
      <Route path="/counter" component={Counter} />
      <Images />
    </Body>
  </div>
);
