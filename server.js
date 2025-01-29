
import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostegres } from "./database-postegres.js";

const server = fastify()

//const database = new DatabaseMemory()
const database = new DatabasePostegres()

server.post('/videos', (request, reply) => {
    const {title, description, duration} = request.body

    database.create({
        title,
        description,
        duration,
    })
    
    return reply.status(201).send()

})

server.get('/videos', (request) => {
    const search = request.query.search

    console.log(search)
    const videos = database.list(search)
    console.log(videos)
    return videos
})

server.put('/videos/:id', async (request,reply) => {
    const videoId = request.params.id
    const {title, description, duration} = request.body

    await database.update(videoId, {
        title,
        description,
        duration
    })
    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3332,
})