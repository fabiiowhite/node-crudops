import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory()

//Request Body

//Create a video
server.post('/videos', (request,reply) => {
    const { title, description, duration } = request.body
    
    database.create({
        title,
        description,
        duration
    })

    console.log((database.list()))

    return reply.status(201).send()
})

//Read or List all videos
server.get('/videos', () => {
    const videos = database.list()

    console.log(videos)

    return videos
})

// Note: Route parameter, the parameter specifying the target (id)

//Edit videos based on their IDs
server.put('/videos/:id', (request,reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()

})

//Delete videos based only on their  ID's 
server.delete('/videos/:id', (request,reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

//Local host port
server.listen({
    port:3333,
})