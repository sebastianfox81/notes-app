const express = require('express');
const cors = require('cors');
const db = require('./db')

const app = express();
const port = process.env.PORT || 5000

// MIDDLEWARE
app.use(express.json());
app.use(cors());

const userRoute = require('./routes/user');
const noteRoute = require('./routes/note');

app.use('/api/users', userRoute);
app.use('/api/notes', noteRoute);

// CONNECT EXPRESS SERVER
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})