import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

// GET, POST, PUT, DELETE, PATCH

server.post('/videos', () => {
    return 'create videos'
})

server.get('/videos', () => {
    return 'read a video'
})

// Route parameter, the parameter specifying the target (id)

server.put('/videos/:id', () => {
    return 'update video'
})

server.delete('/videos/:id', () => {
    return 'delete video'
})

server.listen({
    port:3333,
})