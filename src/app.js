const http = require('http');

const getUsers = require('./modules/users');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${hostname}:${port}/`);
    const params = url.searchParams;
    const name = params.get('hello');

    if (params.has('hello')) {
        if (name === '') {
            res.statusCode = 400
            res.statusMessage ='ok'
            res.setHeader('Content-Type', 'text/plain')
            res.end(`Enter a name`)

            return

        }  else {
            res.statusCode = 200
            res.statusMessage ='Error'
            res.setHeader('Content-Type', 'text/plain')
            res.end(`Hello ${name}`)

            return

        }
    };

   if (req.url === '/users') {
    res.statusCode = 200;
    res.statusMessage ='ok'
    res.setHeader('Content-Type', 'application/json');
    res.end(getUsers());

    return;
   }

   if (req.url === '/') {
    res.statusCode = 200;
    res.statusMessage ='ok'
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world!');

    return
   }

   res.statusCode = 500
   res.statusMessage ='Error'
   res.setHeader('Content-Type', 'text/plain')
   res.end('')
   
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
