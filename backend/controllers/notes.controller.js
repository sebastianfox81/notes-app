const notesCtrl = {};

const Note = require('../models/Note')

// GET ALL NOTES
notesCtrl.getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes)
};

// CREATE NEW NOTE
notesCtrl.createNewNote = async (req, res) => {

  const { title, content, date, author } = req.body;

  const newNote = new Note({
    title,
    content,
    date,
    author
  });

  console.log(newNote)
  await newNote.save();
  res.json({ msg: 'Note saved'})
};

// GET NOTE BY ID
notesCtrl.getOneNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
};

// UPDATE NOTE
notesCtrl.updateNote = async (req, res) => {

  const { title, content, author } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    content,
    author
  })
  res.json({ msg: 'Note updated' })
};

// DELETE NOTE
notesCtrl.removeNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ msg: 'Note removed'})
};

module.exports = notesCtrl;