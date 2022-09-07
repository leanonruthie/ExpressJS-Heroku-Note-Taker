// 11-Express/01-Activities/21-Ins_Modular-Routing and 22-Stu_Modular-Routing for helpers folder

const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/db.json');
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// This is to get to index.html OR notes.html in public folder
app.get('/', (req, res) => res.send('Navigate to /index or /notes'));
app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`)
);