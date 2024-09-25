// services/ChatRoomService.ts
import SocketService from "./SocketService";
import { Message } from "../models/Message.model";
class ChatRoomService {
  private socket = SocketService.getInstance().getSocket();

  public joinRoom(roomId: string, username: string) {
    this.socket.emit("joinRoom", { roomId, username });
    console.log(`Joined room ${roomId} as ${username}`);
  }

  public getUserId(callback: (userid: string) => void) {
    this.socket.on("getUserId", callback);
  }

  public messageHistory(callback: (messages: any) => void) {
    this.socket.on("messageHistory", callback);
  }

  public joinPreviousRoom(roomId: string, userId: string) {
    this.socket.emit("joinPreviousRoom", { roomId, userId });
  }

  public leaveRoom(roomId: string, username: string) {
    this.socket.emit("leaveRoom", { roomId, username });
  }

  public personLeaved(callback: (username: string) => void) {
    this.socket.on("leavedPerson", callback);
  }

  public sendMessage(message: Message) {
    this.socket.emit("sendMessage", message);
  }

  public onReceiveMessage(callback: (msg: any) => void) {
    this.socket.on("receiveMessage", callback);
  }

  public onActiveUsers(callback: (users: any) => void) {
    this.socket.on("activeUsers", callback);
  }
}

export default ChatRoomService;
