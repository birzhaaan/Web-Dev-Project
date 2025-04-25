import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Volunteer } from '../../models/volunteer';

@Component({
  selector: 'app-volunteer-list',
  imports: [],
  templateUrl: './volunteer-list.component.html',
  styleUrl: './volunteer-list.component.css'
})
export class VolunteerListComponent {
  volunteers: Volunteer[] = [];
  constructor(
      private userService: UserService,
    ) {
      this.userService.getVolunteers().subscribe({
        next: (volunteers) => {
          this.volunteers = volunteers;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    viewDetails(volunteer_id: number) {}
}
