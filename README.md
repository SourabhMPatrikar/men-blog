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
[**R** (Read) - *Fatch the data from database and display in web page*]

For this we need a dependence of router after that we have to use <code>get<code> for fatch the data from database, then we have to make a function for retrieve the data from database. start the function with required URL and (req, res, next) then create database connection then mention collection name and use find() for whole data and use find({id, type}) for specific data and call as an toArray and handle the error.

<br>
router.get('<b><i>URL</i></b>', function(req, res, next){
<br>
	var db = req.db;
<br>
	db.collection('<b><i>Collection Name</i></b>').find().toArray(function(err, docs){
<br>
		console.log(docs);
<br>
		if(err || !docs.length){
<br>
			res.json({success:false, err:err});
<br>
		}
<br>
		else{
<br>
			res.json(docs);
<br>
		}
<br>
	});
<br>
});
