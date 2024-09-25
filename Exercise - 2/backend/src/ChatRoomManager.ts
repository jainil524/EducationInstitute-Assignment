import { v4 as uuidv4 } from "uuid";

interface User{
  id: string;
  username: string;
  previousRooms: string[];
}

class ChatRoom {
  public users: Map<string, User>;
  public messages: { userid: string, username: string, message: string }[] = [];

  constructor() {
    this.users = new Map();
  }

  generateId() {
    return uuidv4();
  }

  addUser(username: string): string {
    const userid = this.generateId();
    this.users.set(userid, { id: userid, username, previousRooms: [] });

    return userid;
  }

  removeUser(userId: string) {
    this.users.delete(userId);
  }

  addMessage(userid: string, username: string, message: string) {
    this.messages.push({ userid, username,message });
  }
}

export class ChatRoomManager {
  private static instance: ChatRoomManager;
  private chatRooms: { [key: string]: ChatRoom } = {};

  private constructor() { }

  public static getInstance(): ChatRoomManager {
    if (!ChatRoomManager.instance) {
      ChatRoomManager.instance = new ChatRoomManager();
    }
    return ChatRoomManager.instance;
  }

  getChatRoom(roomId: string): ChatRoom {
    if (!this.chatRooms[roomId]) {
      this.chatRooms[roomId] = new ChatRoom();
    }
    return this.chatRooms[roomId];
  }

  getUserAlreadExists(roomId: string, username: string): boolean {
    return this.chatRooms[roomId]?.users.has(username) ?? false;
  }
}
