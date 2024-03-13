const express = require ("express");
const path = require("Path");
const { Socket } = require("socket.io");

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname+"/public")));

io.on("connection", function(sokcket){
    sokcket.on("newuser", function(username){
    Socket.boradcast.emit("update" , username + " joined the conversation");
});
    sokcket.on("exituser", function(username){
    Socket.boradcast.emit("update" , username + " left the conversation");
});
    sokcket.on("chat", function(username){
    Socket.boradcast.emit("chat", message);
});
});

server.listen(5000)