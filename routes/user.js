const router = require('express').Router();

router.get('/usertest', (req, res) => {
  res.send('user test is successful');
});

router.post('/postTest', (req, res) => {
  req.send('post user ' + req.body.username);
});

module.exports = router;
