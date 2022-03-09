const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Project = sequelize.define(
    'project',
    {
     id: {
         type:Sequelize.INTEGER,
         primaryKey:true,
         autoIncrement: true,
     } ,
     name:{
         type:Sequelize.STRING
     }  
    },
    {
        timestamps: false
    }
)

//creamos relaciones entre 2 tablas
// Project.hasMany(Task,{foreinkey:'projectid',sourceKey:'id'});
// Task.belongsTo(Project,{foreinkey:'projectid',targetId:'id'});

module.exports = Project;