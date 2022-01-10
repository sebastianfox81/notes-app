const notesCtrl = {};

// GET ALL NOTES
notesCtrl.getAllNotes = (req, res) => { res.json( { msg: [] } ) };
// CREATE NEW NOTE
notesCtrl.createNote = (req, res) => { res.json( { msg: 'Note saved'} ) };
// GET NOTE BY ID
notesCtrl.getOneNote = (req, res) => { res.json( {title: 'Best Note'} ) };
// UPDATE NOTE
notesCtrl.updateNote = (req, res) => { res.json( { msg: 'Note updated' } ) };
// DELETE NOTE
notesCtrl.deleteNote = (req, res) => { res.json( { msg: 'Note removed'} ) };

module.exports = notesCtrl;