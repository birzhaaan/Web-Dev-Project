import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Session } from '../models/session';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}
  getSessions(): Observable<Session[]> {
    const accessToken = this.authService.getAccessToken();
    return this.http.get<Session[]>('http://localhost:8000/api/chats/sessions/', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
  }
  startSession(request_id: number, volunteer_id: number) {
    const accessToken = this.authService.getAccessToken();
    return this.http.post(
      'http://localhost:8000/api/chats/sessions/',
      {request: request_id, volunteer: volunteer_id}, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    
    });
  }

  getMessages(session_id: number): Observable<Message[]>{
    const accessToken = this.authService.getAccessToken();
    return this.http.get<Message[]>(
      `localhost:8000/api/chats/sessions/${session_id}/messages`
    )
  }
  postMessage(session_id: number, message: string){
    const accessToken = this.authService.getAccessToken();
    return this.http.post(
      `localhost:8000/api/chats/sessions/${session_id}/messages/`,
      {
          "session": session_id,
          "message": message
      }
    )
  }
}
