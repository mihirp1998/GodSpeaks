'use strict';

// y We’re setting up an extremely simple server here.
const http = require('http');
var qs =require('querystring')
const mysql = require('mysql');
const fs = require('node-fs');
console.log('no');
// These could (should) be set as env vars.
const port =  80;
const host = '45.55.138.95';
var con = null;
function connect(){

con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "helloworld123",
  database: "comments"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

}
connect();
// No matter what hits the server, we send the same thing.
http.createServer(function(req, res) {
var body = ''

console.log('create');
console.log(req.url);
    if(req.url.length == 1){ //req.url has the pathname, check if it conatins '.html'

      fs.readFile(__dirname + '/mihirspeaks/index.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('min.js') != -1){ //req.url has the pathname, check if it conatins '.j;
console.log('hello');
 fs.readFile(__dirname + '/mihirspeaks/jquery-3.2.1.min.js', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
       res.end();
      });
}
if(req.url.indexOf('first.js') != -1){
console.log('first');
  fs.readFile(__dirname + '/mihirspeaks/first.js', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });


    }

    if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile(__dirname + '/mihirspeaks/style.css', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });

    }
if(req.url.indexOf('.jpg') != -1){ //req.url has the pathname, check if it $

      fs.readFile(__dirname + '/mihirspeaks/pic.jpg', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });

    }
	 if(req.url.indexOf('doit') != -1){ 
//     	console.log(req.body.petition);
	req.on('data',function(data){
body = body +data;
console.log(body);

});
req.on('end',function(){
var post =qs.parse(body);
var answer = post.ans;
var quest = post.quest;
console.log('answer is %s quesion is %s',answer,quest);
con.query('use comments',function(err){
if(err)
{throw err;}
else{
console.log('woopie');}
} );
con.query("insert into  questions  values(\""+ quest +"\",\""+answer+"\")",function(err){
if(err)
{throw err;}
else{
console.log('woopiedoopie');}
} );


//con.query('insert into questions(questions,answer) values('+question+','
//+ answer+')',function(err){if(err){throw err;} else{console.log('inserted');}});
console.log('post '+ post.val);
});

	console.log('success');
    }


// Send a simple message in HTML.
 //res.writeHead(200, { 'Content-Type': 'text/html' });
//res.write('<h1>aI’m a Node app!</h1>');
//res.end();
//res.write('<p>And I’m <em>sooooo</em> secure.</p>');
//res.end();
}).listen(port, host);

// This message prints in the console when the app starts.
//console.log(`App running at http:${host}:${port}`);


