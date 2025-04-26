import { Component, Input } from '@angular/core';
import { Rekvest } from '../../models/request';
import { UserService } from '../../services/user.service';
import { Volunteer } from '../../models/volunteer';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-request-card',
  imports: [CommonModule],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
  @Input() rekvest!: Rekvest;
  @Input() currentUser!: User;
  isOwner = false;
  isVolunteer = false;
  user!: User;
  volunteer!: Volunteer | null;
  currentVoulunteer!: Volunteer | null;

  constructor(
    private userServiece: UserService,
    private chatservice: ChatService
  ) {}

  ngOnInit() {
    if (this.currentUser.id === this.rekvest.user) {
      this.isOwner = true;
    }
    if (this.currentUser.is_volunteer) {
      this.isVolunteer = true;
      this.userServiece.getVolunteerbyUserId(this.currentUser.id).subscribe({
        next: (volunteer) => {
          this.currentVoulunteer = volunteer;
        }});
    }
    this.userServiece.getUserbyId(this.rekvest.user).subscribe({
      next: (user) => {
        this.user = user;
      }
    });
    if (this.rekvest.volunteer !== null) {
      this.userServiece.getVolunteerbyId(this.rekvest.volunteer).subscribe({
        next: (volunteer) => {
          this.volunteer = volunteer;
        }
      });
    }
  }
  acceptRequest() {}
  changeStatus(new_status: string) {}
  openChat(){
    if (this.rekvest.volunteer !== null) {
      this.chatservice.startSession(
        this.rekvest.id, 
        this.currentVoulunteer?.id ?? 0
      ).subscribe({})
    }
    
  }
}