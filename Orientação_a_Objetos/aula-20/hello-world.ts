import express from 'express'
import dotenv from 'dotenv'
import { readFileSync } from 'node:fs';

interface IUser {
    name: string
    idade: number
}

const path = require('path');
const caminhoDoEnv = path.resolve(__dirname, '.env');
dotenv.configDotenv({path: caminhoDoEnv})
const app = express()

app.use('/client', express.static(path.join(__dirname, 'public')))

const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3300
const users: IUser[] = [
    {
        name: 'Fulano',
        idade: 20
    },
    {
        name: 'Ciclano',
        idade: 35
    }

]

app.get('/api', (request, response) => {
    // const homePagePath = path.join(__dirname, 'home.html')
    // const homePage = readFileSync(homePagePath)

    return response.status(200).send('<h1 style="color: red;">Hello World Guys!</h1>')
    // return response.status(200).send(homePage)
})

app.get('/api/users', (request, response) => {
    return response.json(users)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta no endereço: ${url}:${port}`)
})