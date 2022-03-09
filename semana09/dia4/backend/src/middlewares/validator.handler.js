const boom = require('@hapi/bom');

function validatorHandler(schema,property){
    return (req,res,next)=>{
        const data = req[property];
        const {error} = schema.validate(cata,{abortEarly:false});
        if(error){
            next(boom.badRequest(error));
        }
        next();
    }
}

module.exports = validatorHandler;