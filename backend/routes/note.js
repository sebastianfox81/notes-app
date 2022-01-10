const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('testing note route')
})

module.exports = route;