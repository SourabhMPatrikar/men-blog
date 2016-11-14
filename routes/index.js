var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	res.render('index', { title: 'Express'});
// });
router.get('/', function(req, res, next) {
  var db = req.db;
  db.collection('category').find().toArray(function(err, categories) {
	  if(err || !categories.length){
		  res.json({
			  success: false,
			  err : err
		  });
	  }else{

	  	db.collection('publisher').find().toArray(function(err, publishers) {
			if(err || !publishers.length){
			  res.json({
				  success: false,
				  err : err
			  });
			}else{

				db.collection('archive').find().toArray(function(err, archives) {
					if(err || !archives.length){
						res.json({
						  success: false,
						  err : err
						});
					}else{

						db.collection('about').find().toArray(function(err, about) {
							if(err || !about.length){
								res.json({
								  success: false,
								  err : err
								});
							}else{
								res.render('index', { title: 'Express', about: about, archives: archives, publishers : publishers, categories : categories });
							}
						});
					}
				});
				
			}
		  });
	  }
  });
});



router.get('/posts', function(req, res, next) {
  res.render('post', { title: 'Express' });
});
router.get('/api/post', function(req, res, next){
	var db = req.db;
	db.collection('post').find().toArray(function(err, docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});



router.get('/post/:id', function(req, res, next) {
  res.render('postdetails', { title: 'Express' });
});
router.get('/api/post/:id', function(req, res, next){
	var db = req.db;
	db.collection('post').find({id:req.params.id}).toArray(function(err, docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});


router.get('/api/postByCategory/:id', function(req, res, next){
	var db = req.db;
	db.collection('post').find({category_id:req.params.id}).toArray(function(err,docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});

router.get('/api/postByPublisher/:id', function(req, res, next){
	var db = req.db;
	db.collection('post').find({category_id:req.params.id}).toArray(function(err,docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});

router.get('/api/postByGroup/:id', function(req, res, next){
	var db = req.db;
	db.collection('post').find({category_id:req.params.id}).toArray(function(err,docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});
router.get('/api/about', function(req, res, next){
	var db = req.db;
	db.collection('about').find().toArray(function(err,docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});
router.get('/api/postByDate', function(req, res, next){
	var db = req.db;
	db.collection('postByDate').find().toArray(function(err,docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});

module.exports = router;
