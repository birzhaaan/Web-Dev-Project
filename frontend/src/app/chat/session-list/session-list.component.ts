import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Session } from '../../models/session';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-session-list',
  imports: [RouterLink],
  templateUrl: './session-list.component.html',
  styleUrl: './session-list.component.css'
})
export class SessionListComponent {
  sessions: Session[] = [];
  constructor(
    private chatservice: ChatService,
    private userService: UserService
  ){
    chatservice.getSessions().subscribe({
      next: (sessions) => {
        this.sessions = sessions
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


}
