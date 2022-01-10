const userCtrl = {};

// GET ALL USERS
userCtrl.getAllUsers = (req, res) => { res.json({ msg: []}) };
// CREATE NEW USER
userCtrl.createNewUser = (req, res) => { res.json({ msg: 'New user created'}) };
// DELETE USER
userCtrl.removeUser = (req, res) => { res.json({ msg: 'User removed'}) };

module.exports = userCtrl;