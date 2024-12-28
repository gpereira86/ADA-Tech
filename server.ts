import express from 'express'
import dotenv from 'dotenv'
import { userRoutes } from './routes/UserRoutes';
import cors from 'cors'

const path = require('path');
const caminhoDoEnv = path.resolve(__dirname, '.env');
dotenv.configDotenv({path: caminhoDoEnv})
const app = express()
app.use(express.json())

app.use('/client', express.static(path.join(__dirname, 'public')))
app.use(cors())

const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3300

app.get('/api', (request, response) => {

    return response.status(200).send('<h1>Api Base Url</h1>')
})

app.use(userRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta no endereço: ${url}:${port}`)
})