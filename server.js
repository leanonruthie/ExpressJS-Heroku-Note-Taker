// 11-Express/01-Activities/21-Ins_Modular-Routing and 22-Stu_Modular-Routing for helpers folder
// const api not necessary here since established in routes folder
const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// immediate landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

// taken to notes.html from landing page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// As mentioned before, routes folder contains const api and defines proper router
app.use(routes);

// Tutor also provided a useful tool nodemon to run nodemon server.js instead of node server.js
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`)
);