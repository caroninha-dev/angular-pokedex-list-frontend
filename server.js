//Install express server
const express = require('express');
const path = require('path');

const app = express();

const APP_NAME = 'pokemons-list'

// Serve only the static files form the dist directory
app.use(express.static(`./dist/${APP_NAME}`));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: `dist/${APP_NAME}/` }),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);