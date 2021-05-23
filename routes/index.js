const router = require('express').Router();
const apiRoutes = require('./api');

//use all routes with /api before the rest of the route
router.use('/api', apiRoutes);

//Send an error if an incorrect route is used
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;