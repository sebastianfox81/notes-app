const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('testing user route')
})

module.exports = route;