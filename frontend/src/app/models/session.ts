import { Message } from "./message";

export interface Session {
    id: number,
    request: number,
    volunteer: number,
    started_at: Date,
    is_active: boolean,
    messages: Message[],
}
