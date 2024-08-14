const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io'); // Correct import of socket.io

app.use(cors({
    origin: "http://localhost:5173", // Update this to your client-side origin
    methods: ["GET", "POST"],
}));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Update this to your client-side origin
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => { // Corrected typo: 'connection' and lowercase 'socket'
    console.log(`User connected with id: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`User disconnected with id: ${socket.id}`);
    });
});

server.listen(3001, () => {
    console.log('Listening on *:3001');
});

