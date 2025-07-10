const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req)
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is Isha Dubey</h1> <p> Hey this is the way to rock the world!</p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About Isha Dubey</h1> <p> Hey this is about Isha Dubey</p>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else{
        // res.harry();
        res.statusCode = 404;
        res.end('<h1>Not Found</h1> <p> Hey this page was not found on this server</p>');
    }
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});