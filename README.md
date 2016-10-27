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



# Part03 -[CRUD Operation]

### CRUD Operation
CRUD is a process of interaction with data base. The word 'CRUD' is a short form of below activities
- **C** (Create) - *Create collection, data and records in database*
- **R** (Read) - *Fatch the data from database and display in web page*
- **U** (Update) - *Change specific data or set of data in database and web page*
- **D** (Delete) - *Remove/Delete specific data from web page and database*

## Read Operation
[**R** (Read) - *Fetch the data from database and display in web page*]

For this we need a dependence of router after that we have to use <code>get</code> for fetch the data from database, then we have to make a function for retrieve the data from database. start the function with required <code>URL</code> and <code>(req, res, next)</code> then create database connection then mention collection name and use <code>find()</code> for whole data and use <code>find({id, type})</code> for specific data and call as an toArray and handle the error.

```
router.get('URL', function(req, res, next){
	var db = req.db;
	db.collection('Collection Name').find().toArray(function(err, docs){
		console.log(docs);
		if(err || !docs.length){
			res.json({success:false, err:err});
		}
		else{
			res.json(docs);
		}
	});
});
```

1) URL
2) (req, res, next)
3) db connection [var db = req.db]
4) db.collection('Collection Name')
5) find() or find({"id":"id number"})
6) toArray(function(err, docs){ console log display, error handling and required checks });



Angular task
----------------------
- Fetch Post By ID
- Category List
- Category Detail





