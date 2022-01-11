const userCtrl = {};
const User = require('../models/User')

// GET ALL USERS
userCtrl.getAllUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
};

// CREATE NEW USER
userCtrl.createNewUser = async (req, res) => {

  const { username } = req.body;
  const newUser = new User({
    username
  })

  await newUser.save();
  res.json({ msg: 'New user created'})
};

// DELETE USER
userCtrl.removeUser = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ msg: 'User removed'})
};

module.exports = userCtrl;