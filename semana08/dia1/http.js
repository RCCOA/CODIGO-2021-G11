const http = require('http');

http.createServer(function (req,res){
    console.log("Levantamos servidor http");
    console.log(req.url);
    switch(req.url){
        case '/hola':
            res.write('Hola Mundo Node');
            res.end();
            break;
        default:
            res.write('<h1>PAGINA NO ENCONTRADA</h1>');
            res.end();
    }
    
}).listen(5000);