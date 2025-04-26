import { User } from "./user"
import { Volunteer } from "./volunteer"

export interface Rekvest {
    "id": number,
    "user": number,
    "volunteer": number | null,
    "description": string,
    "status": string,
    "created_at": Date,
    "updated_at": Date
}

export interface RekvestExtended {
    "id": number,
    "user": User,
    "volunteer": Volunteer | null,
    "description": string,
    "status": string,
    "created_at": Date,
    "updated_at": Date
}