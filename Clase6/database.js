const mysql = require('mysql2/promise');

async function connetDb () {
    const conexion = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cliente'
    })
    const arrayObject = await conexion.query('SELECT * FROM persona')
    console.log(arrayObject[0]);

    // const result = await conexion.query('INSERT INTO persona VALUES("Pablo", "lesbiana")')
    conexion.end()
}

connetDb();
module.exports= connetDb;