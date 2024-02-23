//UUID = Universal Unique ID
import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()

    //Function to list all elements  in the database.
    list() {
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        })
    }

    //Function to add a new video in the database.
    create (video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    //Function to update a video based on it's ID
    update(id, video){
        this.#videos.set(id, video)
    }

    //Function to get a specific video by it's ID.
    delete(id){
        this.#videos.delete(id)
    }

}