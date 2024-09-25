class ChatRoom {
  public users: Set<string>;
  public messages: { user: string; message: string }[] = [];

  constructor() {
    this.users = new Set();
  }

  addUser(username: string) {
    this.users.add(username);
  }

  removeUser(username: string) {
    this.users.delete(username);
  }

  addMessage(user: string, message: string) {
    this.messages.push({ user, message });
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
}
