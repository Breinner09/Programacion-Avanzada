const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 5355;

http.createServer((Request, Response) => {
    Response.write(fs.readFileSync('actividad.html'))
    return Response.end()
    // if (Request.url === '/home') {
    //     const read 
    // }
}).listen(port, host, () =>{
    console.log(`Server is running on http://${host}:${port}`);
})