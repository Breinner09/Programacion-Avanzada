const express = require('express');
const app = express();
const host = "localhost";
const port = "5355";

//para leer json
// app.use(express.json())

//para leer tipo texto 
// app.use(express.text())

//para recibir formularios
app.use(express.urlencoded());

app.get('/adios', (req, res) => {
    console.log(req.body.nombre);
})


// app.get('/home', (req, res) => {
//     res.send("hola desde home")
// });

// app.get('/persona/:name', (req, res) => {
//     let name = req.params.name;
//     res.send(`Hola ${name}`)
// });

// app.get('/home/query', (req, res) => {
//     console.log(req.query);
//     res.send(`la query es ${req.query.saludo}`)
// });

// app.get('/home/body', (req, res) => {
//     const constBody = req.body;
//     // res.send(`el nombre que contiene el body es ${constBody}`)
//     // res.json(constBody);
//     res.send(req.body);
// });



// app.post('/help', (req, res) => {
//     res.send("hola desde help")
// });

app.use((req, res, next) => {
    if (req.query.nombre === "brei") {
        next()
    } else {
        res.send("Error, no hay query")
    }

})

app.get("/home", (req, res) => {
    res.send(`la query es ${req.query.nombre}`)
});

app.use((req, res) => {
    res.status(404).send("<h1 style= color:red>Error 404<h1>");
});

app.listen(port, host, () => {
    console.log(`el link de acc es http://${host}:${port} `);
});


