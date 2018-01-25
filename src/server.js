/* eslint-disable no-console */
import fs from 'fs';
import React from 'react';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {App} from './redux-client/App';
import {reducers} from './redux-client/redux/reducers';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

app.use(
  '/static',
  express.static(path.resolve(__dirname, '..', 'build', 'static'))
);

app.use((req, res) => {
  const indexFilePath = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(indexFilePath, 'utf8', (err, html) => {
    if (err) {
      console.error('read err', err);
      return res.status(404).end();
    }
    const store = createStore(reducers, {counter: 1});

    const context = {};
    const appWithRouting = (
      <Provider store={store}>
        <Router location={req.url} context={context}>
          <App />
        </Router>
      </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    const app = ReactDOMServer.renderToString(appWithRouting);

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      res.redirect(301, context.url);
    } else {
      // we're good, send the response
      const htmlAndApp = html
        .replace('<div id="root"></div>', `<div id="root"> ${app} </div>`)
        .replace(
          '<body>',
          `<script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <body>
        `
        );

      res.send(htmlAndApp);
    }
  });
});

app.listen(PORT, function() {
  console.log(`Server side rendering app listening on port ${PORT}!`);
});
