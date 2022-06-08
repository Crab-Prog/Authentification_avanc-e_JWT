const { setupRoutes } = require('./routes');
const express = require('express');
const connection = require('./db-config');
require ('dotenv').config();
const cookieParser = require('cookie-parser')

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser())
connection.connect(err => {
  if (err) console.log('Erreur de connexion à la DB', err)
  else console.log('Connexion à la DB ok, id ' + connection.threadId)
})

setupRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
