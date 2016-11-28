var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	res.render('index', { title: 'Express'});
// });
//router.get('/', getCategory, getPublisher, render)
router.get('/', function(req, res, next) {
  var db = req.db;
  db.collection('category').find().toArray(function(err, categories) {
	  if(err || !categories.length){
	  	  console.log('category err')
		  res.json({
			  success: false,
			  err : err
		  });
	  }else{

	  	db.collection('publisher').find().toArray(function(err, publishers) {
			if(err || !publishers.length){
			  console.log('publisher err')
			  res.json({
				  success: false,
				  err : err
			  });
			}else{

				db.collection('post').distinct('onYear',{}, function(err, years) {
					
					if(err || !years.length){
						console.log('years err')
						res.json({
						  success: false,
						  err : err
						});
					}else{

						db.collection('staticpage').find().toArray(function(err, docs) {
							if(err || !docs.length){
								console.log('about err')
								res.json({
								  success: false,
								  err : err
								});
							}else{

								// db.collection('archive').find().toArray(function(err, archive) {
								// 	if(err || !archive.length){
								// 		res.json({
								// 		  success: false,
								// 		  err : err
								// 		});
								// 	}else{
								// 		res.render('index', { title: 'Express', about: about, archives: archives, publishers : publishers, categories : categories });
								// 	}

								// });
								res.render('index', { title: 'Express', about: docs, archives: years, publishers : publishers, categories : categories });
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
router.get('/api/postByYear/:id', function(req, res, next){
	var db = req.db;
	var test = require('assert');
					
	db.collection('post').find({id:req.params.id}).toArray(function(err,docs){
			test.deepEqual([0, 1, 2, 3], docs.sort());

			console.log(docs);
			if(err || !docs.length){
				res.json({success:false, err:err});
			}
			else{
				res.json(docs);
			}
		});
	});
router.get('/api/postByDate/:id', function(req, res, next){
	var db = req.db;
	db.collection('post').find({id:req.params.id}).toArray(function(err,docs){
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
