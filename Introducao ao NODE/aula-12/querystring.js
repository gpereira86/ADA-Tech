const querystring = require('node:querystring')
const url = require('node:url')

const urlBase = 'https://site-viagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'verão'
})

const fullUrl = `${urlBase}/${uri}`

console.log(fullUrl)

const pardesedUri = querystring.parse(uri)

console.log(uri)
console.log(pardesedUri)
console.log(pardesedUri.destino)

console.log(url.parse(fullUrl))

const uri2 = querystring.escape('São Paulo')
console.log(uri2)
const unescapedUri2 = querystring.unescape(uri2)
console.log(unescapedUri2)