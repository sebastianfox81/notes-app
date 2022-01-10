const router = require('express').Router();

const { getAllNotes, createNewNote, getOneNote, updateNote, removeNote  } = require('../controllers/notes.controller')

router.route('/')
  .get(getAllNotes)
  .post(createNewNote);

router.route('/:id')
  .get(getOneNote)
  .put(updateNote)
  .delete(removeNote);

module.exports = router;