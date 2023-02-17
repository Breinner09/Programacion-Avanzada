const path = require('path');

//crea, junta una salida adecuada de acuerdo al sistema operativo
const fileJoin = path.join('consumible', '/propiedades', 'etc.js');
console.log(fileJoin);

//la base de la ruta donde termina
const fileBaseName = path.basename(fileJoin);
console.log(fileBaseName);

//dar la ruta sin el archivo
const fileDirName = path.dirname(fileJoin);
console.log(fileDirName);

//la ruta pero en forma de objeto
const fileParse = path.parse(fileJoin);
console.log(fileParse);

//completa la ruta del sistema con la ruta proporcionada 
const fileResolve = path.resolve(fileJoin);
console.log(fileResolve);
