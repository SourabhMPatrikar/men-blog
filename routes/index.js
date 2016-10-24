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

//router.get('/category', function(req, res, next){
//	res.render('category',{title:'Express'});
//});
//
//router.get('/category/:category_id',function(req, res, next){
//	res.render('categorydetails',{title:'Express'});
//});

router.get('/api/category', function(req, res, next) {
  var db = req.db;
  db.collection('Category').find({"id" : "2"}).toArray(function(err, docs) {
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

router.get('/api/post', function(req, res, next){
	var db = req.db;
	db.collection('Post').find({"title" : "Zee TV"}).toArray(function(err, docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});

router.get('/api/postno9', function(req, res, next){
	var db = req.db;
	db.collection('Post').find({"category_id" : "9"}).toArray(function(err, docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false,err:err});
		}
		else{
			res.json(docs);
		}
	});
});

router.get('/sourabh', function(req, res, next){
	var db = req.db;
	db.collection('Post').find().toArray(function(err, docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false,err:err});
		}
		else{
			res.json(docs);
		}
	});
});
module.exports = router;
