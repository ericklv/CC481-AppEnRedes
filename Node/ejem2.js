//Declaramos los ciclos
let semesters = [
  {
    semester:  '1',
    matriculate:  '0'
  },
  {
    semester:  '2',
    matriculate:  '0'
  },
  {
    semester:  '3',
    matriculate:  '0'
  },
  {
    semester:  '4',
    matriculate:  '0'
  },
  {
    semester:  '5',
    matriculate:  '0'
  },
  {
    semester:  '6',
    matriculate:  '0'
  },
  {
    semester:  '7',
    matriculate:  '0'
  },
  {
    semester:  '8',
    matriculate:  '0'
  },
  {
    semester:  '9',
    matriculate:  '0'
  },
  {
    semester:  '10',
    matriculate:  '0'
  },
];

//Declaramos los estudiantes
let students = [  
  { cod:   '20164563D',
    name:     'Chris',
    lastname: 'Griffin',
    semester:    '1'
  },
  { cod:'20134283D',
    name: 'Meg',
    lastname: 'Griffin',
    semester:    '5'
  },
  { cod:'20119478R',
    name: 'Peter',
    lastname: 'Griffin',
    semester:    '6'
  },
  { cod:'20124672A',
    name: 'Stewie',
    lastname: 'Griffin',
    semester:    '6'
  },
  { cod:'20134579K',
    name: 'Joe',
    lastname: 'Piernas',
    semester:    '7'
  },
  { cod:'20134578F',
    name: 'Glen',
    lastname: 'Quagmire',
    semester:    '8'
  },
  { cod:'20196385F',
    name: 'Lois',
    lastname: 'Griffin',
    semester:    '3'
  },
  { cod:'20114725F',
    name: 'Cleveland',
    lastname: 'Nigga',
    semester:    '5'
  }
];


students.forEach(function(item, index){
  semesters.forEach(function(current_value){
    if(current_value.semester==item.semester){
      current_value.matriculate++;
    }

  });
});


console.log("\nSummary:\n\n| Semester | # Students\t|");
console.log("-------------------------");

semesters.forEach(
  function(item, index){
    console.log("| > " + item.semester + "\t|> \t" + item.matriculate + "\t|");
  });


