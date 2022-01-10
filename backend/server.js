const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

const userRoute = require('./routes/user');
const noteRoute = require('./routes/note');

app.use('/api/user', userRoute);
app.use('/api/note', noteRoute);


// CONNECT TO MONGOOSE DATABASE
const URI = 'mongodb://localhost/notesapp';
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connection to MongoDB established successfully')
});

// CONNECT EXPRESS SERVER
app.listen(5000, () => {
  console.log('Listening on port 5000')
})