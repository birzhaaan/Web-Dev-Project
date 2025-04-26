import { Message } from "./message";
import { Volunteer } from "./volunteer";

export interface Session {
    id: number,
    request: number,
    volunteer: number,
    started_at: Date,
    is_active: boolean,
    messages: Message[],
}

export interface SessionExtended {
    id: number,
    request: Request,
    volunteer: Volunteer,
    started_at: Date,
    is_active: boolean,
    messages: Message[],
}
