import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { ChatRoomManager } from "./controllers/ChatRoomManager";

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // For development, allow any origin
  },
});

const chatRoomManager = ChatRoomManager.getInstance();

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("joinRoom", ({ roomId, username }) => {
    socket.join(roomId);

    const room = chatRoomManager.getChatRoom(roomId);
    room.addUser(username);

    io.to(roomId).emit("activeUsers", Array.from(room.users));
    socket.emit("messageHistory", room.messages);

    socket.on("sendMessage", (message) => {
        console.log("message", message);
        
      room.addMessage(message.user, message.message);
      io.to(roomId).emit("receiveMessage", { message });
    });

    socket.on("leaveRoom", ({ roomId, username }) => {
      socket.leave(roomId);
      room.removeUser(username);
      io.to(roomId).emit("activeUsers", Array.from(room.users))
      io.to(roomId).emit("leavedPerson", username);
    });

    socket.on("disconnect", () => {
      room.removeUser(username);
      io.to(roomId).emit("activeUsers", Array.from(room.users));
    });
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
