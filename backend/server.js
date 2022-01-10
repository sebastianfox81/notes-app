require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000

// MIDDLEWARE
app.use(express.json());
app.use(cors());

const userRoute = require('./routes/user');
const noteRoute = require('./routes/note');

app.use('/api/users', userRoute);
app.use('/api/notes', noteRoute);


// CONNECT TO MONGOOSE DATABASE

const URI = process.env.MONGODB_URI;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connection to MongoDB established successfully')
});

// CONNECT EXPRESS SERVER
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})