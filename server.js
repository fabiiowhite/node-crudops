//import { createServer } from 'node:http'

//const server = createServer((request, response) => {
//    response.write('hello')
//    return response.end()
//})

//server.listen(3333)

// POST localhost: 3333/videos

// DELETE localhost:3333/videos/l

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'nothing to see'
})

server.get('/hello', () => {
    return 'hello world'
})

server.get('/bye', () => {
    return 'bye world'
})

server.listen({
    port:3333,
})