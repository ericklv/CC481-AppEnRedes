const yargs = require('yargs')
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');

/*1.
if(argv.name == "LeGuishe"){
	console.log('Bienvenido Guise!');
}
else{
	console.log('ya jalaste Guise!');
}*/

//add
const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add','Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('getlist','Lists all the notes',{
	})
	.command('search','Search a note',{
		title: titleOptions
	})
	.command('delElm',' note',{
		title: titleOptions
	})
	.command('delAll','delete all the notes',{
	})
	.help()
	.argv;

let command = argv._[0];

if (command === "add") {
	notes.addNote(argv.title,argv.body);
} else if (command === "getlist") {
	console.log("\n\t Notes: ");
	let allNotes = notes.getAll();
	let cont=0;
	allNotes.forEach(note => {
		notes.logNote(note);
		cont++;
	});

	if(cont<2){
	console.log("\nTa vacio pe ¬¬");
	}
} else if (command === "search") {
	//console.log(command);
	let test = notes.getNote(argv.title);
	if (test){
		notes.logNote(test);
	}else{
		console.log("Xq busca lo q no se le perdió >:v");
	}
	
} else if (command === "delAll") {
	notes.notesDelete();
	console.log("\nBan, Ban, Ban xd")
} else if (command == "delElm") {
	console.log(command);
	notes.notesRemove(argv.title)
}else{
	console.log("C mamut");
}