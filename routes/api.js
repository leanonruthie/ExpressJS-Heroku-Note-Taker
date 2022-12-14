// 11-Express/01-Activities/21-Ins_Modular-Routing and 22-Stu_Modular-Routing for helpers folder

// Tutor taught me how to establish express and router simultaneously
const router = require('express').Router();
const { readFromFile, readAndAppend, deleteNote } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
// See index.js to remind myself that router.get is derived from router.use('/api', apiRouter)
router.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// 11-Express/01-Activities/01-Activities/28-Stu_Mini-Project
// GET Route for a specific note
// See index.js to remind myself that router.get is derived from router.use('/api', apiRouter)
router.get('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json('No Note with that ID');
    });
});

// DELETE Route for a specific tip
// See index.js to remind myself that router.delete is derived from router.use('/api', apiRouter)
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  deleteNote(noteId, './db/db.json')
    .then(() => {
      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

// POST Route for new notes
// See index.js to remind myself that router.post is derived from router.use('/api', apiRouter)
router.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding Note');
  }
});

module.exports = router;
