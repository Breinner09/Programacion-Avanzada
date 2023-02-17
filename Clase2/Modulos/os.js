const os = require('os');
const funciones = require('./funciones')


// console.log(Object.keys(os).length);

//arc sistema operativo 
// console.log(os.machine());
// console.log(os.arch());

//version de sistema operativo 
// console.log(os.version());

//Tiempo que ha sido utilizado el sistema y la maquina
// console.log(os.uptime());

//informacion de usuario
// console.log(os.userInfo());

//familia del sistema operativo
// console.log(os.type());

//total de memoria ram disponible
// console.log(os.totalmem());

//memoria ram disponible 
// console.log(os.freemem());

//establece una prioridad del proceso (numero)
// console.log(os.setPriority());

//consulta la prioridad del proceso
// console.log(os.getPriority());

//version del sistema operativo especifica
// console.log(os.release());

//plataforma sobre la cual se trabaja
// console.log(os.platform());

//nombre del usuario
// console.log(os.hostname());

//info sobre el procesador
// console.log(os.cpus());
// let mapIdUsers = os.cpus().slice(0,1).map((registro) => registro.model);
// console.log(mapIdUsers);

//capacidad de sub procesos
// console.log(os.availableParallelism());

//directorio predetermindado para los archivos temporales
// console.log(os.tmpdir());

//filter
// const arreglo = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

// const parPositivo = (numero) => {
//     if (numero %2 === 0 && numero > 0) {
//         return true;
//     }
//     return false;
// }

// console.log(arreglo.filter(parPositivo));


//map
//itera sobre un array 
// const arreglo2=[1,2,3,4,5,6,7];

// console.log(arreglo2.map(number => {
//     return number * number
// }));

//reduce
//
// const array = [3, 9, 12, 23, 99, 1];
// array.reduce((total, num) => {
//     return total + num;
// })


// let hola = {
//     saludo: 'Hola'
// };

// let hola2 = {
//     saludo: 'Hola',
//     nombre: 'Breinner'
// };

// console.log(Object.assign(hola, hola2))



const actividad = {
    ramDisponible: funciones.memDisponible(),
    ramTotal: funciones.memTotal(), 
    sistemaOpt: os.release(),
    frecuencia:{
        user: os.cpus().slice(0, 1).map((registro) => registro.times.user),
        nice: os.cpus().slice(0, 1).map((registro) => registro.times.nice),
        sys: os.cpus().slice(0, 1).map((registro) => registro.times.sys),
        idle: os.cpus().slice(0, 1).map((registro) => registro.times.idle),
        irq: os.cpus().slice(0, 1).map((registro) => registro.times.irq)
    }
}


module.exports = actividad;