const http = require('http'); 
const fs = require('fs'); 
 
const host = 'localhost'; 
const port = 8000; 
 
const server = http.createServer( 
    function(req, res) { 
        fs.readFile('intersteller.html', 'utf8', function(err, data) { 
            if (err) { 
                res.writeHead(500, { 'Content-Type': 'text/plain' }); 
                res.end('Помилка при читанні файлу: ' + err); 
            } else { 
                res.writeHead(200, { 'Content-Type': 'text/html' }); 
                res.end(data); 
            } 
        }); 
    } 
); 
 
server.listen(port, host, function() { 
    console.log('Server is running at http://' + host + ':' + port); 
});
