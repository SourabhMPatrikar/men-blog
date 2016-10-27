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

router.get('/category', function(req, res, next){
	res.render('category',{title:'Express'});
});

router.get('/category/:category_id',function(req, res, next){
	res.render('categorydetails',{title:'Express'});
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

// router.get('/api/about',function(req, res, next){
// 	var db = req.db;
// 	db.collection('About').find().toArray(function(err, docs){
// 		console.log(docs);
// 		if(err || !docs.length){
// 			res.json({success:false, err:err});
// 		}
// 		else{
// 			res.json(docs);
// 		}
// 	});
// });



router.get('/api/category', function(req, res, next) {
  var db = req.db;
  db.collection('category').find().toArray(function(err, docs) {
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
router.get('/api/category/:id', function(req, res, next) {
  var db = req.db;
  console.log({id:req.params.id});
  db.collection('category').find({id:req.params.id}).toArray(function(err, docs) {
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
router.post('/api/category', function(req, res, next) {
	//alert('Hi');
  var db = req.db;
  db.collection('category').insertOne({"id" : "14", "name" : "Machinics", "url" : "machinics", "title" : "Machinical"}, function(err, docs){
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
//db.collection.insert({a:1}, {"id" : "11", "name" : "Accounting", "url" : "accounting", "title" : "Account and Analysis"}, function(err, result){
//db.createCollection('Category').find({"id" : "11", "name" : "Accounting", "url" : "accounting", "title" : "Account and Analysis"}).toArray(function(err, docs) {
  
//  db.products.insert(
//		   [
//		     { _id: 20, item: "lamp", qty: 50, type: "desk" },
//		     { _id: 21, item: "lamp", qty: 20, type: "floor" },
//		     { _id: 22, item: "bulk", qty: 100 }
//		   ],
//		   { ordered: false }
//		)
//});


//
//router.get('/api/postno9', function(req, res, next){
//	var db = req.db;
//	db.collection('Post').find({"category_id" : "9"}).toArray(function(err, docs){
//		console.log(docs);
//		if(err || !docs.length){
//			res.json({success:false,err:err});
//		}
//		else{
//			res.json(docs);
//		}
//	});
//});
//
//router.get('/sourabh', function(req, res, next){
//	var db = req.db;
//	db.collection('Post').find().toArray(function(err, docs){
//		console.log(docs);
//		if(err || !docs.length){
//			res.json({success:false,err:err});
//		}
//		else{
//			res.json(docs);
//		}
//	});
//});
module.exports = router;
