import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()

    create (video) {
        //Universal Unique ID
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video){
        this.#videos.set(id, video)
    }

    update(id){
        this.#videos.delete(id)
    }

    list() {
        return this.#videos.values()
    }
}