import app from "./app";
import http from "http";
import { Server } from "socket.io";
import { firebaseApp } from "./firebase";

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Connected");

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  // game start events
  socket.on("game-start", () => {});

  // game moves events
  socket.on("move", () => {});

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

server.listen(3000, () => {
  console.log("server running on port: 3000");
  console.log("firebase connected: " + firebaseApp.name);
  console.log(firebaseApp.options);
});
