//import { createServer } from 'node:http'
//
//const server = createServer((request,response) => {
//    
//    response.write('Hello world')
//    return response.end()
//})
//
//server.listen(3332)



import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()

//POST http://localhost:3332/videos
//PUT http://localhost:3332/videos

//Rout Parameter

server.post('/videosTeste', () => {
    const database = new DatabaseMemory
    database.creat('TropaDeElite')
    return database.filme
})

server.get('/videos', () => {
    return 'Hello bMax'
})

server.put('/videos/:id', () => {
    return 'Hello node.js'
})

server.delete('/videos/:id', () =>{
    return 'hello node.js'
})

server.listen(
    {port: 3332}
)