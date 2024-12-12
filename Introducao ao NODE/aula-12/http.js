const http = require('node:http')

const sports = ['soccer', 'volley', 'basketball', 'tennis']

const server = http.createServer(async(request, response)=>{
    const {method, statusCode, url} = request
    
    request.headers.accept = '*'
    request.headers.allow = '*'

    const bodyPromisse = new Promise((resolve, reject) => {
        let body
        
        request.on('data', data => {
            body = JSON.parse(data)
        })

        request.on('end', data => {
            resolve(body)
        })
    })

    

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
            const body = await bodyPromisse

            const { name } = body

            if (!sports.map(sport => sport.toLocaleLowerCase()).includes(name.toLocaleLowerCase())){
                sports.push(name.toLocaleLowerCase())
                console.log('enter')
            }

            response.write(name.toLocaleLowerCase())
            response.end()
            return
        }


    }

    response.statusCode = 404
    response.write('<h1>Página não encontrada</h1>')
    response.end()

})

server.listen(3000, 'localhost', () => {
    console.log('Server running on http://localhost:3000')
})