const express= require('express');
const conexion = require('../bd/database.js')

const routes = express.Router();

//consulta 
routes.get('/', (req ,res)=>{
        conexion.query('SELECT * FROM persona',(error,results)=>{
        if (error) {
            throw error;
        }else{
            res.render('../views/index.ejs',{results:results});
        }

       })
});

routes.get('/create',(req,res)=>{
    res.render('../views/create.ejs')
});
//ruta para editar registros
routes.get('/edit/:id',(req,res)=>{
    const id = req.params.id
    conexion.query('SELECT * FROM persona WHERE id=?',[id],(error,results)=>{
        if (error) {
            throw error;
        }else{
            res.render('../views/edit.ejs',{persona:results[0]});
        }

    })
});

//ruta para eliminar registro 
routes.get('/delete/:id',(req,res)=>{
    const id= req.params.id;
    conexion.query('DELETE FROM persona WHERE id=?',[id],(error,results)=>{
        if (error) {
            throw error;
        }else{
            res.redirect('/');
        }
    })
})

const crud = require('../controllers/crud.js')

routes.post('/save',crud.save);
routes.post('/update',crud.update);
module.exports=routes