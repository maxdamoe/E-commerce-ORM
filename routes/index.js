const hype = require('express').Router();
const apiRoutes = require('./api');

hype.use('/api', apiRoutes);

hype.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = hype;