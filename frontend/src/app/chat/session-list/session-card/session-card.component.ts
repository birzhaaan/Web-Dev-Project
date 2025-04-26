import { Component, Input } from '@angular/core';
import { Session } from '../../../models/session';
import { RouterLink } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { ChatService } from '../../../services/chat.service';
import { RequestsService } from '../../../services/requests.service';
import { Rekvest } from '../../../models/request';
import { Volunteer } from '../../../models/volunteer';

@Component({
  selector: 'app-session-card',
  imports: [RouterLink],
  templateUrl: './session-card.component.html',
  styleUrl: './session-card.component.css'
})
export class SessionCardComponent {
  @Input() session!: Session;
  request!: Rekvest;
  volunteer!: Volunteer;

  constructor(
    private userServiece: UserService,
    private chatService: ChatService,
    private requestService: RequestsService

  ){}
  ngOnInit(){
    this.requestService.getRequestbyId(this.session.request).subscribe({
      next: (req) => {
        this.request = req;
      }
    })
    this.userServiece.getVolunteerbyId(this.session.volunteer).subscribe({
      next: (volunteer) => {
        this.volunteer = volunteer;
      }
    })
  }

}
