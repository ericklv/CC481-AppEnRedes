const express = require('express');
const pug = require('pug');
const request = require('request');


var app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));


let texto1 = 'tst';

let texto2 = 'tst2';

let texto3 = 'tst3';

let encrypt = (text)=>{
	text = text.toUpperCase();
	text = text.replace(/A/g,4);
	text = text.replace(/E/g,3);
	text = text.replace(/I/g,1);
	text = text.replace(/O/g,0);
	text = text.replace(/U/g,5);
	return text;
};

var item_a;
var item_b;
var item_c;

request({
  //url:'https://maps.googleapis.com/maps/api/geocode/json?address=Miraflores',
  url:'http://mighty-harbor-50073.herokuapp.com/api',
  json: true
}, function (err, res, body) {
  //
  //console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  //console.log(JSON.stringify(body),undefined,2);
  if(err){
    console.log('error:', err); // Print the error if one occurred
  }else if(body.status === 'ZERO RESULTS'){
    console.log("Es imposible encontrar resultados");
  }else if(body.status === 'OK'){
    console.log('Entre ps iama');
  }else{
    //console.log(body[0].facultades[0].FC[0].alumnos);
    item_a="Nombre: " +body[0].facultades[0].FIC[0].alumnos[0].nombre+" , "+"Apellido: "+body[0].facultades[0].FIC[0].alumnos[0].apellido+" , "+"Codigo: "+body[0].facultades[0].FIC[0].alumnos[0].codigo+" , FC";
    
    console.log("Nombre: " +body[0].facultades[0].FIC[0].alumnos);
    //console.log("Apellido: "+body[0].facultades[0].FIC[0].alumnos[0].apellido);
    //console.log("Codigo: "+body[0].facultades[0].FIC[0].alumnos[0].codigo);
    
    //item_a = body[0].facultades[0].FIC[0].alumnos[0];
    item_b = body[0].facultades[0].FC[0].alumnos;
    item_c = body[0].facultades[0].FAUA[0].alumnos;
    
    //console.log(body[0].facultades[0].FIC);
    //console.log(body[0].facultades[0].FAUA);
    
  }

});


app.get('/', (req, res) => {
  res.render('index.pug', {
    pageTitle: 'Example  Node JS',
    title: 'Ventajas de Node JS',
    text1: texto1,
    text2: texto2,
    currentYear: new Date().getFullYear()
  });
});

app.get('/encrypted', (req, res) => {
  res.render('index.pug', {
    pageTitle: 'Example  Node JS',
    title: 'Ventajas de Node JS - Encrypted',
    text1: encrypt(texto1),
    text2: encrypt(texto2),
    currentYear: new Date().getFullYear()
  });
});

app.get('/primero', (req, res) => {
  res.render('index.pug', {
    pageTitle: 'Primero',
    title: 'Alumnos de 6to Ciclo',
    text1: item_a,
    currentYear: new Date().getFullYear(),

  });
});

app.get('/segundo', (req, res) => {
  res.render('index.pug', {
    pageTitle: 'Example  Node JS',
    title: 'Alumnos de 7mo Ciclo',
    text1: item_b,
    currentYear: new Date().getFullYear()
  });
});

app.get('/tercero', (req, res) => {
  res.render('index.pug', {
    pageTitle: 'Example  Node JS',
    title: 'Alumnos de Julie',
    text1: encrypt(texto1),
    text2: encrypt(texto2),
    currentYear: new Date().getFullYear()
  });
});

// /bad - send back json with errorMessage
app.get('/not_found', (req, res) => {
  res.send({
    errorMessage: 'Not found, as the love she felt for you'
  });
});

app.listen(3000, () => {
  console.log('Server Momero is up on port 3000');
});