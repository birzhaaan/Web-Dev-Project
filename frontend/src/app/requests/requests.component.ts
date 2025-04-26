import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Rekvest, RekvestExtended } from '../models/request';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { RequestCardComponent } from "./request-card/request-card.component";
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-requests',
  imports: [RouterLink, RouterOutlet, RequestCardComponent],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  reukvests: Rekvest[] = [];
  currentUser!: User;
  constructor(
    private requestservice: RequestsService,
    private userService: UserService,
  ) {
        this.requestservice.getRequests().subscribe({
          next: (reukvests) => {
            this.reukvests = reukvests;
          }
        });
        this.userService.getMe().subscribe({
          next: (user) => {
            this.currentUser = user;
          }
        });
      }
  
}
