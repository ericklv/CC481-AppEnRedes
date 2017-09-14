const http=require('http');
const fs = require('fs');

//Modules
const score = require('./score');
const verify = require('./verify');
const del = require('./delete');
const avg = require('./average');

//Memaso Server
const hostname = '127.0.0.1';
const port = 3001;

//init
let student=score.student;
let check = verify.check_number;

//Verify
student.forEach((item)=>{
	item.notes.forEach((nota)=>{
		console.log(nota);
	});
});
//Finding min
let min=Math.min.apply(null,student[0].notes);

//Delete min element
del.removeItem(student[0].notes,min);
console.log("Nota minima: "+min);

//Average
let prom= avg.avgArr(student[0].notes);

console.log("Promedio: "+prom);

const server = http.createServer((req,res)=>{	
	res.statusCode=200;
	res.writeHead(200,{"Content-Type":"text/html"});
	fs.readFile('./index.html',(error,content)=>{
		res.write(content);
		res.write('<div class="col-xs-8" id="nAlum"><h2>Name: '+student[0].name+'</h2></div>');
		res.write('<div class="col-xs-8" id="nNotes1"><label>Note 1: '+student[0].notes[0]+'</label></div>');
		res.write('<div class="col-xs-8" id="nNotes2"><label>Note 2: '+student[0].notes[1]+'</label></div>');
		res.write('<div class="col-xs-8" id="nNotes3"><label>Note 3: '+student[0].notes[2]+'</label></div>');
		res.write('<div class="col-xs-8" id="nNotes3"><label>Del Note: '+min+'</label></div>');
		res.write('<br><br><div class="col-xs-8" id="nProm"><h2>Average: '+prom+'</h2></div></div></body></html>');

		res.end();
	});

});

server.listen(port,hostname,()=>{
	console.log("Memasos Server running in "+`http://${hostname}:${port}`);
});