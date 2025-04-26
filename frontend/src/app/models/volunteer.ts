import { User } from "./user";

export interface Volunteer {
    "id": 1,
    "user": User,
    "is_available": true,
    "skills": string,
    "location": string
}