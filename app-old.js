import { createServer } from 'http';


createServer((request, response) => {
    console.log(request.url)
    /** 
     * Mostrar el mensaje en el DOM y después terminarlo 
     * Si no paro el response, el navegador queda cargando por siempre
    **/
    response.write('Hola mundo');
    response.end();
}).listen(8080);

console.log('Escuchando en el puerto 8080');