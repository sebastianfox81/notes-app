const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: { type: String},
  content: { type: String, required: true},
  author: { type: String},
  date: { type: Date, default: Date.now }
},
  { timestamps: true
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
