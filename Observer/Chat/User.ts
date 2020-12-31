import { ChatMessage } from "./ChatMessage";
import { ChatRoomLog } from "./ChatRoomLog";

export class User {
    private userID: string;
    private online: boolean = true;
    private roomLogs: Map<string, ChatRoomLog> = new Map();

    constructor(userID: string) {
        this.userID = userID;
    }

    getUserID(): string {
        return this.userID;
    }
    setOnline(flag: boolean): void {
        this.online = flag;
    }
    isOnline(): boolean {
        return this.online;
    }
    joinRoom(roomName: string): void {
        this.roomLogs.set(roomName, new ChatRoomLog());
    }
    getRooms(): Array<string> {
        let roomNames: Array<string> = [];
        let i: number = 0;
        return roomNames;
    }
    notifyView(roomName: string) {
        console.log(`${roomName} 에 추가되었습니다`);
    }
    update(roomName: string, message: ChatMessage): void {
        if(this.roomLogs.has(roomName)) {
            let room: ChatRoomLog|undefined = this.roomLogs.get(roomName)
            if(room === undefined) return ;
            room.addMessage(message);
            this.notifyView(roomName);
        }
        else throw new Error('참여하지 않은 사람에게 update');
    }
}