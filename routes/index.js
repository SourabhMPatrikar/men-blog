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



router.get('/api/category', function(req, res, next) {
  var db = req.db;
  db.collection('Category').find({"category_id" : "2"}).toArray(function(err, docs) {
	  console.log(docs);
	  if(err || !docs.length){
		  res.json({
			  success: false,
			  err : err
		  });
	  }else{
		  res.json(docs);
	  }
  });  
});


module.exports = router;
