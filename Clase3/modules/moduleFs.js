const fs = require('fs');
const os = require('os');

//
//
//

// leer el contenido de un archivo
// const dato = fs.readFileSync('../data/dato.txt', 'utf-8');
// console.log(dato);

// const tue = fs.readFileSync('../data/tue.js');
// console.log(tue.toString());

// crear un archivo e inserta el contenido 
// const n = "Buñuelo";
// fs.writeFileSync('./data/tercero.js', n);

// crear un archivo y añade contenido 
// for (let i = 1; i <= 10; i++) {
//     const hola = i + ` \n`;
//     fs.writeFileSync('../data/tercero.js', hola , {
//         flag: 'a',
//     });    
// }

// -------------------------------
//           ACTIVIDAD
// -------------------------------
memTotal = () => {
    ram = os.totalmem * [Math.pow(10, -9)];
    return ram + 'Gb';
};

nProcesador = os.cpus().slice(0, 1).map((registro) => registro.model);
usuario = os.userInfo().username;
version = os.release();


const hola = (`${'Nombre del procesador: ' + nProcesador} \n${'Memoria total: ' + memTotal()} \n${'Sistema operativo: ' + version} \n${'Usuario: ' + usuario}`).toString();
fs.writeFileSync('../data/actividad.txt', (hola));


//Codigo sincrono

// fs.readFileSync('data/actividad.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// });