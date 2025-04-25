export interface Rekvest {
    "id": number,
    "user": number,
    "volunteer": number | null,
    "description": string,
    "status": string,
    "created_at": Date,
    "updated_at": Date
}