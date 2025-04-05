const http = require('http');

const host = "localhost";
const port = 3000;

const currentDate = new Date();
const dateText = currentDate.toISOString()

const server = http.createServer((req, res) => {
    if (req.url === "/hello") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain'); 
        res.end("Hello, World!");
    } else if (req.url === "/"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain'); 
        res.end(dateText);
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Page Not Found");
    }
});

server.listen(port, host , () => {
    console.log(`Listening on http://${host}:${port}`);
});