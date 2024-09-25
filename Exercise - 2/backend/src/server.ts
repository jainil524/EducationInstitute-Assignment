import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { ChatRoomManager } from "./ChatRoomManager";

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
    let room = chatRoomManager.getChatRoom(roomId);
    let userid = room.addUser(username);

    console.log("User joined room:", roomId, username);
    console.log(Array.from(room.users.values()));


    socket.emit("getUserId", userid);

    io.to(roomId).emit("activeUsers", Array.from(room.users.values()));
    socket.emit("messageHistory", room.messages);

    socket.on("sendMessage", (message) => {
      console.log("message", message);

      room.addMessage(userid, message.user, message.message);
      io.to(roomId).emit("receiveMessage", { message });
    });

    socket.on("leaveRoom", ({ roomId, username }) => {
      socket.leave(roomId);
      room.removeUser(userid);
      console.log(room.users);


      io.to(roomId).emit("activeUsers", Array.from(room.users))
      io.to(roomId).emit("leavedPerson", username);
    });

    socket.on("disconnect", () => {
      room.removeUser(userid);
      io.to(roomId).emit("activeUsers", Array.from(room.users));
    });
  });

  socket.on("joinPreviousRoom", ({ roomId, userId }:any) => {
    socket.join(roomId);
    let room = chatRoomManager.getChatRoom(roomId);
    
    let user:any = Array.from(room.users.values()).filter(user => user.id === userId);

    if(user.length > 0){
      socket.emit("usernotfound", false);
    }

    socket.emit("getUserId", userId);

    io.to(roomId).emit("activeUsers", Array.from(room.users.values()));
    socket.emit("messageHistory", room.messages);

    socket.on("sendMessage", (message) => {
      console.log("message", message);

      room.addMessage(userId, message.user, message.message);
      io.to(roomId).emit("receiveMessage", { message });
    });

    socket.on("leaveRoom", ({ roomId, username }) => {
      socket.leave(roomId);
      room.removeUser(user.userId);


      io.to(roomId).emit("activeUsers", Array.from(room.users))
      io.to(roomId).emit("leavedPerson", username);
    });

    socket.on("disconnect", () => {
      room.removeUser(user.userId);
      io.to(roomId).emit("activeUsers", Array.from(room.users));
    });
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
