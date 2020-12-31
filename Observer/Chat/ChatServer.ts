import { ChatMessage } from "./ChatMessage";
import { ChatRoom } from "./ChatRoom";
import { User } from "./User";

export class ChatServer {
    private chatRooms: Map<string, ChatRoom> = new Map();
    private users: Map<string, User> = new Map();
    private static uniqueInstance: ChatServer | null = null;
    private ChatServer() {}
    static getServer(): ChatServer {
        if(this.uniqueInstance == null) this.uniqueInstance =  new ChatServer();
        return this.uniqueInstance;
    }
    
    /* DB 역할 메서드 */
    addRoom(roomName: string): void {
        if(!this.chatRooms.has(roomName))
            this.chatRooms.set(roomName, new ChatRoom(roomName));
    }

    addUser(user: User): void {
        if(!this.users.has(user.getUserID()))
            this.users.set(user.getUserID(), user);
    }

    addUserToRoom(userID: string, roomName: string): void {
        let user: User|undefined = this.users.get(userID);
        let chatRoom: ChatRoom|undefined = this.chatRooms.get(roomName);
        if(user === undefined || chatRoom === undefined) return;
        if(chatRoom.addUser(userID))
            user.joinRoom(roomName);
    }
    deleteUserFromRoom(userID: string, roomName: string): void {

    }
    getUsers(): Array<User> {
        let users: Array<User> = [];
        this.users.forEach(values => {
            users.push(values);
        })
        return users
    }

    /* 통신용 */
    sendMessage(roomName: string, message: ChatMessage): void {
        let chatRoom: ChatRoom|undefined = this.chatRooms.get(roomName);
        if(chatRoom === undefined) return;
        chatRoom.newMessage(message);
    }

    forwardMessage(destID: string, roomName: string, message: ChatMessage): boolean {
        let receiver: User|undefined = this.users.get(destID);
        if(receiver === undefined) throw new Error('fowardMessage 에러');
        if(receiver.isOnline()) {
            receiver.update(roomName, message);
            return true;
        }
        return false;
    }

    getUserStatus(userID: string): boolean {
        let user: User|undefined = this.users.get(userID);
        if(user === undefined) throw new Error('에러');
        return user.isOnline();
    }
}

