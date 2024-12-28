import {Router} from 'express'
import { randomUUID } from 'node:crypto';
import dbJson from '.././server.json' 
import { writeFileSync } from 'node:fs';
import path from 'node:path';


type User = {
    id: string
    name: string
    idade: number
}

// interface ICreateUserDTO {
//     name: string
//     age: string
// }

type CreateUserDTO = Omit<User, "id">

const dbJsonPath = path.resolve(process.cwd(), 'server.json')
// const dbJson = readFileSync(dbJsonPath)
// const users: User[] = JSON.parse(dbJson.toString()).users

const users: User[] = dbJson.users


const userRoutes = Router()

userRoutes.get('/api/users', (request, response) => {
    return response.json(users)
})

userRoutes.post('/api/users', (request, response) => {
    const {name, idade}: CreateUserDTO = request.body

    if(!name || (idade < 0 || (!idade && idade !== 0))){
        const errMessage = 'O usuário a ser criado precisa de nome e idade - '+ idade
        return response.status(400).send(errMessage)
    }

    const user = {id: randomUUID(), name, idade}
    users.push(user)
    
    writeFileSync(dbJsonPath, JSON.stringify({users}))

    return response.status(201).json(user)
})

userRoutes.delete('/api/users/:id', async (request, response) => {
    const { id } = request.params

    if(!id){
        const errMessage = 'O usuário a ser deletado precisa de um id'
        return response.status(400).send(errMessage)
    }

    const foundUser = users.find(user => user.id === id)
    
    if(!foundUser){
        const errMessage = `Usuário com id ${id} não foi encontrado`
        return response.status(400).send(errMessage)
    }

    const updatedUsers = users.filter(user => user.id !== id)

    writeFileSync(dbJsonPath, JSON.stringify({users: updatedUsers}))

    return response.status(204).json()
})

export {userRoutes}