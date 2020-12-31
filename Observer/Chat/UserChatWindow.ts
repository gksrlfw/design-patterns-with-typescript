import { ChatMessage } from "./ChatMessage";
import { ChatRoom } from "./ChatRoom";
import { ChatServer } from "./ChatServer";
import { User } from "./User";

export class UserChatWindow {
    private user: User;
    private rooms: Array<string>;
    constructor(user: User) {
        this.user = user;
        this.rooms = user.getRooms();
        console.log(`********** ${this.user.getUserID()} **********`);
        this.rooms.forEach((e, i) => console.log(e));
    }
    sendMessage(): void {
        let roomName: string = this.rooms[0];
        let message: string = '안녕하세요!';
        if(!message.length) return;
        ChatServer.getServer().sendMessage(roomName, new ChatMessage(this.user.getUserID(), message));
        console.log(message);
    }
}