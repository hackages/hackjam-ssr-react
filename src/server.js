/* eslint-disable no-console */
import fs from 'fs';
import React from 'react';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import ReactDOMServer from 'react-dom/server';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

app.use((req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        I'm rendered from the server
      </body>
    </html>
  `);
});

app.listen(PORT, function() {
  console.log(`Server side rendering app listening on port ${PORT}!`);
});
