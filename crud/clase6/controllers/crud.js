const conexion= require('../bd/database.js')


exports.save=(req,res)=>{
   const nombre=req.body.nombre;
   const apellido=req.body.apellido;

   conexion.query('INSERT INTO persona(nombre,apellido) VALUES (?,?)',[nombre,apellido],(error, results)=>{
        if (error) {
            throw error;
        }else{
            res.redirect('/');
        }
   });

}

exports.update = (req,res)=>{
    const id= req.body.id;
    const nombre= req.body.nombre;
    const apellido= req.body.apellido;

    conexion.query('UPDATE persona SET ?  WHERE id=?',[{nombre,apellido},id],(error, results)=>{
        if (error) {
            throw error;
        }else{
            res.redirect('/');
        }
   });
}