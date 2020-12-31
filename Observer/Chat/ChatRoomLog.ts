import { ChatMessage } from "./ChatMessage";

export class ChatRoomLog {
    private messages: Array<ChatMessage> = [];
    addMessage(message: ChatMessage): void {
        this.messages.push(message);
    }
    getMessages(): Array<ChatMessage> {
        return this.messages;
    }
    size(): number {
        return this.messages.length;
    }
    clear(): void {
        this.messages.splice(0, this.messages.length);
    }
}