const http = require('node:http')

const server = http.createServer((request, response)=>{
    const {method, statusCode, url} = request
    const sports = ['soccer', 'volley', 'basketball', 'tennis']

    if (url === '/'){
        response.write("<div><h1>Hello from node</h1><p>http server</p><div>")
        response.end()
        return
    }

    if(url === '/api/sports') {
        if(method === 'GET') {
           response.write(JSON.stringify(sports))
            response.end()
            return
        }

        if(method === 'POST') {
            const bodyPromisse = new
        }
    }

    response.statusCode = 404
    response.write('<h1>Página não encontrada</h1>')
    response.end()

})

server.listen(3000, 'localhost', () => {
    console.log('Server running on http://localhost:3000')
})