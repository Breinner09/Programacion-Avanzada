const express = require('express');

const app = express();

app.post('/home', (req, res) => {
    res.send('este es el home');
})

app.use((req, res) =>{
    res.status('404').send('este es el home')
})

app.listen(5355);

