const router = require('express').Router();

const { getUsers } = require('../controllers/users.controller')

router.route('/')
  .get(getUsers);

module.exports = router;