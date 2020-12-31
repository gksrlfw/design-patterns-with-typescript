export class ChatMessage {
    private senderID: string;
    private content: string;
    constructor(s: string, c: string) {
        this.senderID = s;
        this.content = c;
    }
    getContent(): string {
        return this.content;
    }
    getSenderID(): string {
        return this.senderID;
    }
}