//Juntar los archivos, le asigna un puesto y sus datos personales
let listaUsuarios = require('./modulos/lista.js');
let listaProfesiones = require('./modulos/listaProfesiones.js');

console.log(Object.values(listaUsuarios)[Math.floor(Math.random()*(11-1)+1)]);
console.log(listaProfesiones[Math.floor(Math.random()*(11-1)+1)]);


