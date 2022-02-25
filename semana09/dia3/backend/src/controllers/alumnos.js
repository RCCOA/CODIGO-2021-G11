const alumnoController = {}; // clase

const alumnoModel = require('../models/alumnos'); // objeto

alumnoController.getAll = async (req,res)=>{
    const alumnos = await alumnoModel.find();
    res.json(alumnos);
}

alumnoController.create = async (req,res) =>{
    const {nombre,email} = req.body;
    const nuevoAlumno = new alumnoModel({
        nombre,
        email
    })
    await nuevoAlumno.save();
    res.json({
        status:true,
        content:'Alumno creado con éxito'
    })
}

module.exports = alumnoController;