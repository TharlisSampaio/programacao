// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//Callback
const fs = require('fs')

fs.readFile('./text.txt', callback)

function callback(err, cont){
    if(err) return console.error('error')
    console.log(String(cont))
}


// utilizando programação assíncrona
console.log('Primeiro comando')
console.log('Segundo comando')
console.log('Terceiro comando')

// setTimeout(myFuntion, 3000)

// function myFuntion(){
//     console.log('testando função...')
// }

// setTimeout(() => console.log('testando o setTimeout'), 3000)

console.log('comando que esta depois do setTimeout')

function desafio(){
    const date = new Date()
    console.log(`a hora é: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}
setTimeout(desafio, 5000)
setInterval(desafio, 5000)
setTimeout(desafio, 5000)
setInterval(desafio, 5000)

