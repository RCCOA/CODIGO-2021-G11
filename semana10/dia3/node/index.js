const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'servidor activo'
    })
})

const port = 5000;
app.listen(port,()=>console.log(`servidor en http://localhost:${port}`))

/*****************  */
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./database.sqlite'
})

sequelize.authenticate()
.then(()=>{
    console.log("conexion a bd exitosa")
})
.catch(err=>{
    
})