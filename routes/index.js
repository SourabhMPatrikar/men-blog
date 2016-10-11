var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function(req, res, next) {
  res.render('post', { title: 'Express' });
});

router.get('/post/:post_id', function(req, res, next) {
  res.render('postdetails', { title: 'Express' });
});

module.exports = router;
