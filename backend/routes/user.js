const router = require('express').Router();

const { getAllUsers, createNewUser, removeUser } = require('../controllers/users.controller')

router.route('/')
  .get(getAllUsers)
  .post(createNewUser);

router.route('/:id')
  .delete(removeUser)

module.exports = router;