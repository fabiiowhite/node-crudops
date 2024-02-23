# CRUDOps: Simple Video Management API

Welcome to CRUDOps, a simple yet powerful video management API built with Node.js and Fastify. This API allows you to perform create, read, update, and delete (CRUD) operations on videos stored in local memory using a Map for quick and efficient access. Whether you're developing a new project or learning the ins and outs of API development, CRUDOps offers a straightforward way to manage video data.

## Features

- **Create Videos:** Add new videos with titles, descriptions, and durations.
- **Read Videos:** Fetch a list of all videos stored in the database.
- **Update Videos:** Modify the details of existing videos using their unique IDs.
- **Delete Videos:** Remove videos from the database using their unique IDs.

## Getting Started

Before you begin, ensure you have Node.js installed on your system. If you need to install Node.js, visit [Node.js official website](https://nodejs.org/) for download and installation instructions.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Install the dependencies by running `npm install`.

### Running the Server

To start the server, run the following command in your terminal:

```bash
node server.js
```

The server will start on `localhost:3333`. You are now ready to perform CRUD operations on videos.

## Usage

Here are examples of how you can use CRUDOps to manage videos. Use an API client like Postman or send HTTP requests directly to interact with the API.

### Create a Video

To add a new video, send a `POST` request to `/videos` with the title, description, and duration of the video in the body.

```http
POST http://localhost:3333/videos
Content-Type: application/json

{
    "title": "My First Video",
    "description": "This is an awesome video about CRUD operations.",
    "duration": 60
}
```

### List All Videos

To retrieve a list of all videos, send a `GET` request to `/videos`.

```http
GET http://localhost:3333/videos
```

### Update a Video

To update an existing video, send a `PUT` request to `/videos/{id}` with the new title, description, and duration in the body. Replace `{id}` with the actual ID of the video you want to update.

```http
PUT http://localhost:3333/videos/{id}
Content-Type: application/json

{
    "title": "My Updated Video",
    "description": "This is an updated description.",
    "duration": 120
}
```

### Delete a Video

To delete a video, send a `DELETE` request to `/videos/{id}`. Replace `{id}` with the actual ID of the video you want to delete.

```http
DELETE http://localhost:3333/videos/{id}
```

## Development

This API uses the Fastify framework for its simplicity and high performance. The data is stored in a local Map, making CRUDOps ideal for educational purposes or small projects. If you're looking to expand this project, consider implementing persistence with a database or adding more features to the video management capabilities.

Enjoy building and managing your video collection with CRUDOps!
