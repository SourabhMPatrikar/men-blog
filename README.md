# men-blog
A Blog application on MEAN stack.

## MEAN Stack
------------------
M - MongoDB
E - Express
A - Angular JS
N - Node.js

- Git Setup - SVN 2 tier client-server/client-index-server GIT - 3tier Architecture
- Mongo DB - mongod Service setup
- Node.js - NPM - Nodejs Package Manager   npm install angular 
- Express - Node.js Framework request/respose - ejs/jade //Installation -e
- Express, Sails JS, Strong Loop, Hapi, Mojito
- Creating sample project using express-generator
- 
## Installation
- Git https://git-scm.com/downloads git bash
- MongoDB https://www.mongodb.com/download-center?jmp=nav
- Node https://www.npmjs.com/
- Express http://expressjs.com/en/starter/generator.html
- bower 

## Commands
- ssh-keygen //Generate SSH Key
- mongod --dbpath=D:\MEAN\db from the location C:\Program Files\MongoDB\Server\3.2\bin

##API
Read GET
- /api/post
- /api/post/1
- /api/category/1
Write POST
- /api/post
- /api/category
Update POST
- /api/post/1
- /api/category/1
Delete POST
- /api/post/1
- /api/category/1



##Part03
Fatch data from Mongo Database:
router.get('<i>URL</i>', function(req, res, next){
	var db = req.db;
	db.collection('Post').find().toArray(function(err, docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});