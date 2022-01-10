const router = require('express').Router();

const { getAllNotes, createNote, getOneNote, updateNote, deleteNote  } = require('../controllers/notes.controller')

router.route('/')
  .get(getAllNotes)
  .post(createNote);

router.route('/:id')
  .get(getOneNote)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;