const http = require('http')
const path = require('path')
const fs = require('fs')


//crinado router
http.createServer((request, reponse)=>{
    
    const file = request.url === '/' ? 'index.html' : request.url
    const filePath = path.join(__dirname, 'public', file)
    // pegando as extensão do documento
    const extname = path.extname(filePath)
    // vetor com as extensõe permitidas
    const allowedFileTypes = ['.thml', '.js', '.css']

    const allowed = allowedFileTypes.find((item) => item == extname)

    if(!allowed) return

    fs.readFile(
        path.join(__dirname, 'public','index.html'),
        (err, content) => {
            if(err) throw err
            reponse.end(content)
        }
    )

}).listen(5000,()=> (console.log('servidor rodando.......')))