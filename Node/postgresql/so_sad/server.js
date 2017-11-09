var express = require('express');
var pug = require('pug');
var pg = require("pg");
var app = express();
 
var connectionString = "postgres://thanatos:Fr3y4@localhost:5432/dbuni";

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

 
app.get('/all', function (req, res, next) {
    pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       let prosor='Prosor2';
       client.query('SELECT * from GetAllStudent()',function(err,result) {
           done(); // closing the connection;,
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });
    });
});
 
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});

app.get('/prosor', function (req, res, next) {
    pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       let prosor='Prosor2';
       client.query('SELECT * from GetAllxTeacher($1)',[prosor],function(err,result) {
           done(); // closing the connection;,
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });
    });
});

var config = {
  user: 'thanatos',
  database: 'dbuni', 
  password: 'Fr3y4', 
  port: 5432, 
  max: 10, // max number of connection can be open to database
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

app.get('/pool', function (req, res) {
    pool.connect(function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * from GetAllStudent()' ,function(err,result) {
          //call `done()` to release the client back to the pool
           done(); 
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });
    });
});

app.get('/first', (req, res) => {
  pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * from GetAllStudent()',function(err,result) {
           done(); // closing the connection;,
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.render('index.pug', {
            pageTitle: 'All',
            title: 'All Students',
            text1: 'Primer item',
            results : result.rows,
            //text2: encrypt(texto2),
            currentYear: new Date().getFullYear()
          });
       });
    });
  
});

app.get('/second', (req, res) => {
  pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * from GetAllxSemester($1)',[6],function(err,result) {
           done(); // closing the connection;,
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.render('index2.pug', {
            pageTitle: '6th Semester',
            title: '6th Semester',
            text1: 'Primer item',
            results : result.rows,
            //text2: encrypt(texto2),
            currentYear: new Date().getFullYear()
          });
       });
    });

});

app.get('/third', (req, res) => {
  pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * from GetAllxSemCourse($1,$2)',[7,'Ingles'],function(err,result) {
           done(); // closing the connection;,
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.render('index3.pug', {
            pageTitle: '7th Semester FC',
            title: '7th Semester FC',
            text1: 'Primer item',
            results : result.rows,
            //text2: encrypt(texto2),
            currentYear: new Date().getFullYear()
          });
       });
    });

});

app.get('/fourth', (req, res) => {
  pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 

      let prosor='Julie';
       client.query('SELECT * from GetAllxTeacher($1)',[prosor],function(err,result) {
           done(); // closing the connection;,
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.render('index4.pug', {
            pageTitle: 'Miss Julie',
            title: 'Miss Julie',
            text1: 'Primer item',
            results : result.rows,
            //text2: encrypt(texto2),
            currentYear: new Date().getFullYear()
          });
       });
    });
});
