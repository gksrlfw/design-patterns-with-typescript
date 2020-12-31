import { ChatMessage } from "./ChatMessage";
import { ChatRoomLog } from "./ChatRoomLog";
import { ChatServer } from "./ChatServer";

export class ChatRoom {
    private roomName: string;
    private roomLog: ChatRoomLog = new ChatRoomLog();
    private userList: Map<string, number> = new Map();
    constructor(roomName: string) {
        this.roomName = roomName;
    }
    getRoomName(): string {
        return this.roomName;
    }
    newMessage(message: ChatMessage): void {
        if(message === null) return;
        this.roomLog.addMessage(message);
        this.updateUsers();
    }
    addUser(userID: string): boolean {
        if(this.userList.has(userID)) return false;
        this.userList.set(userID, 0);
        return true;
    }
    updateUsers(): void {
        this.userList.forEach((index, userID, o) => {
            let isOnline: boolean = ChatServer.getServer().getUserStatus(userID);
            if(isOnline) {
                let index: number|undefined = this.userList.get(userID);
                if(index === undefined) return;
                if(this.roomLog.size()-1 > index) 
                    this.getAllMessagesFromIndex(userID);
                else {
                    ChatServer.getServer().forwardMessage(userID, this.roomName, this.roomLog.getMessages()[index]);
                    this.userList.set(userID, index+1);
                }
            }
        });
    }
    getAllMessagesFromIndex(userID: string): void {
        let index: number|undefined = this.userList.get(userID);
        if(index === undefined) return;
        for(let i=index; i<this.roomLog.size(); i++)
            ChatServer.getServer().forwardMessage(userID, this.roomName, this.roomLog.getMessages()[i]);
        this.userList.set(userID, this.roomLog.size());
    }
}