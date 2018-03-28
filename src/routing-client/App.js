import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import {Counter} from './Counter';
import {Images} from '../shared/Images';
import {Header} from '../shared/Header';
import {Body} from '../shared/Body';
import {Welcome} from '../shared/Welcome';
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
      <Route path="/redirect" render={() => <Redirect to="/" />} />
      <Images />
    </Body>
  </div>
);
