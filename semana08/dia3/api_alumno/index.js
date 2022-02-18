const express = require('express');
const app = express();

// //Settings
app.set('port',process.env.PORT || 5000);

//Middlewares
app.use(express.json());

//Routes
app.get('/',function(req,res){
    res.json({
        'status':true,
        'content':'Bienvenido a mi API'
    })
})

const mysqlConnection = require('./database');

app.get('/tbl_alumno',function(req,res){
    mysqlConnection.query('select * from tbl_alumno',(err,rows,fields)=> {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

app.post('/tbl_alumno',function(req,res){
    const {alumno_nombre,alumno_email} = req.body;
    const query = 'insert into tbl_alumno(alumno_nombre,alumno_email) values(?,?)';
    
    mysqlConnection.query(query,[alumno_nombre,alumno_email],(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':'Alumno inserted'
            })
        }
        else{
            console.log(err);
        }
    })
})

app.put('/tbl_alumno/:alumno_id',function(req,res){
    const {alumno_nombre,alumno_email} = req.body;
    const {alumno_id} = req.params;
    const query = "update tbl_alumno set alumno_nombre=?,alumno_email=? where alumno_id=?"

    mysqlConnection.query(query,[alumno_nombre,alumno_email,alumno_id],(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':'Alumno Updated'
            })
        }else{
            console.log(err);
        }
    })
})

app.delete('/tbl_alumno/:alumno_id',function(req,res){
    const {alumno_id} = req.params;
    const query = "delete from tbl_alumno where alumno_id=?"

    mysqlConnection.query(query,[alumno_id],(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':'Alumno Deleted'
            })
        }else{
            console.log(err);
        }
    })
})



// //Server
app.listen(app.get('port'),() =>{
    console.log(`Server running at http://localhost:${app.get('port')}`);
})