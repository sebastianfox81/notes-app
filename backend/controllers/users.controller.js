const usersCtrl = {};

usersCtrl.getUsers = (req, res) => {
  res.json({ msg: 'GET all users'})
}

module.exports = usersCtrl;