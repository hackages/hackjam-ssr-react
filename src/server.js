/* eslint-disable no-console */
import fs from 'fs';
import React from 'react';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import {App} from './counter-client/App';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

app.use(
  '/static',
  express.static(path.join(__dirname, '..', 'build', 'static'))
);

app.use((req, res) => {
  const indexHtml = fs.readFileSync(
    path.join(__dirname, '../build/index.html'),
    'utf8'
  );
  const appRendered = ReactDOMServer.renderToString(<App />);
  const indexHtmlClient = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${appRendered}</div>`
  );
  res.send(indexHtmlClient);
});

app.listen(PORT, function() {
  console.log(`Server side rendering app listening on port ${PORT}!`);
});
