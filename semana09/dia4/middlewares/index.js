const express = require('express');
const app = express();
const boom =require('@hapi/boom');

// MIDDLEWARES PRINCIPAL
app.use(function(req,res,next){
    console.log('Tiempo: ',Date.now());
    next();
})

// rutas
app.get("/",(req,res)=>{
    res.json({
        status:true,
        content:"EJEMPLO CON MIDDLEWARES"
    })
})

// middleware para ruta usuario
app.use('/usuario',function(req,res,next){
    console.log(a + 3);
    console.log('tipo request : ',req.method);
    next();
})

app.get("/usuario",(req,res)=>{
    res.json({
        status:true,
        content:[{
            nombre:'rccoa',
            email:'ronaldccoa@gmail.com'
        }]
    })
})



// MIDDLEWARES PARA ERRORES
app.use(function(err,req,res,next){
    res.json(boom.badImplementation())
})
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).json({
        status:false,
        content:'Ocurrió un ERROR! en el servidor'
    })
})

app.listen(5000,function(){
    console.log('Servido corriendo en http://localhost:5000');
})