const notesCtrl = {};

notesCtrl.getNotes = (req, res) => {
  res.json({ msg: 'GET all notes'})
}

module.exports = notesCtrl;