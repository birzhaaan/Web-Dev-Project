import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message-session',
  imports: [],
  templateUrl: './message-session.component.html',
  styleUrl: './message-session.component.css'
})
export class MessageSessionComponent {
  messages: Message[] = []
  constructor(
    private route: ActivatedRoute,
    private chatservice: ChatService
  ){
    const sessionId = Number(this.route.snapshot.paramMap.get('id'));
    chatservice.getMessages(sessionId).subscribe(
      {
        next: (messageArr) => {
          this.messages = messageArr;
        },
        error: (err) => {
          console.error(err)
        }
      }
    );
  }
}
