//Declaramos los ciclos
let ciclos = [
  {
    ciclo:  '1',
    matriculados:  '0'
  },
  {
    ciclo:  '2',
    matriculados:  '0'
  },
  {
    ciclo:  '3',
    matriculados:  '0'
  },
  {
    ciclo:  '4',
    matriculados:  '0'
  },
  {
    ciclo:  '5',
    matriculados:  '0'
  },
  {
    ciclo:  '6',
    matriculados:  '0'
  },
  {
    ciclo:  '7',
    matriculados:  '0'
  },
  {
    ciclo:  '8',
    matriculados:  '0'
  },
  {
    ciclo:  '9',
    matriculados:  '0'
  },
  {
    ciclo:  '10',
    matriculados:  '0'
  },
];

//Declaramos los estudiantes
let students = [  
  { codigo:   '20164563D',
    name:     'Chris',
    apellido: 'Griffin',
    ciclo:    '1'
  },
  { codigo:'20134283D',
    name: 'Meg',
    apellido: 'Griffin',
    ciclo:    '5'
  },
  { codigo:'20119478R',
    name: 'Peter',
    apellido: 'Griffin',
    ciclo:    '6'
  },
  { codigo:'20124672A',
    name: 'Stewie',
    apellido: 'Griffin',
    ciclo:    '6'
  },
  { codigo:'20134579K',
    name: 'Joe',
    apellido: 'Piernas',
    ciclo:    '7'
  },
  { codigo:'20134578F',
    name: 'Glen',
    apellido: 'Quagmire',
    ciclo:    '8'
  },
  { codigo:'20196385F',
    name: 'Lois',
    apellido: 'Griffin',
    ciclo:    '3'
  },
  { codigo:'20114725F',
    name: 'Cleveland',
    apellido: 'Nigga',
    ciclo:    '5'
  }
];


students.forEach(function(item, index){
  ciclos.forEach(function(current_value){
    if(current_value.ciclo==item.ciclo){
      current_value.matriculados++;
    }

  });
});


console.log("\nResumen:\n\n| # Ciclo | # Estudiantes\t|");
console.log("---------------------------------");

ciclos.forEach(
  function(item, index){
    console.log("| > " + item.ciclo + "\t|> \t" + item.matriculados + "\t\t|");
  });


