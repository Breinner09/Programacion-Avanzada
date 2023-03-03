const express = require('express')
const {join} = require('path')
require('ejs')
const app = express()

const rutas = require('./rutas')
const info = require('./info')
const rutas2 = require('./rutas2')


app.set('view engine', 'ejs')
app.set('views',join(__dirname,'views'))
app.use(rutas)
app.use(rutas2)

app.get("/home",(req,res)=>{
    res.send("hola desde home")
})

app.use((req,res)=>{
    res.send("error")
})

routes.get('/info', (req,res)=>{
    res.send("Hola desde Info")
})

app.listen(5355)