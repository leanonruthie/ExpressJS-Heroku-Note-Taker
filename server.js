// the below consts were drilled into since Express Day 1

const express = require('express');
const app = express();
const path = require('path');
const db = require('./db.json');
const PORT = process.env.PORT || 3001;

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