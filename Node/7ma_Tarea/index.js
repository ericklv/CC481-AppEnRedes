const express = require('express');
const pug = require('pug');

var app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));


let texto1 = 'Node.js usa el motor de JavaScript V8 de Google: una maquina virtual (VM) tremendamente \
rápida y de gran calidad escrita por gente como Lars Bak, uno de los mejores ingenieros del mundo especializados en VMs.';

let texto2 = 'Basicamente Node es adecuado cuando necesitas hacer muchas cosas al mismo tiempo, sobre todo \
muchas operaciones I/O (acceso a ficheros, bases de datos,…) a la vez.Y es especialmente bueno para aplicaciones\
realtime, que necesitan mantener una conexión persistente entre el browser y el servidor (juegos online, chats,\
herramientas de colaboración, etc ).Si lo que necesitas es trabajo intensivo de CPU (codificacion de video,\
manipulación de imagen, etc) utilizar Node no supone ninguna ventaja';

let encrypt = (text)=>{
	text = text.toUpperCase();
	text = text.replace(/A/g,4);
	text = text.replace(/E/g,3);
	text = text.replace(/I/g,1);
	text = text.replace(/O/g,0);
	text = text.replace(/U/g,5);
	return text;
};


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

// /bad - send back json with errorMessage
app.get('/not_found', (req, res) => {
  res.send({
    errorMessage: 'Not found, as the love she felt for you'
  });
});

app.listen(3000, () => {
  console.log('Server Momero is up on port 3000');
});