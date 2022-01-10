const router = require('express').Router();

const { getNotes } = require('../controllers/notes.controller')

router.route('/')
  .get(getNotes)

module.exports = router;