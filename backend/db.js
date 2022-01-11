require('dotenv').config();
const mongoose = require('mongoose');

// CONNECT TO MONGOOSE DATABASE

const URI = process.env.MONGODB_URI;
const db = mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connection to MongoDB established successfully')
});

module.exports = db;