import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-me',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css'
})
export class MeComponent {
  user!: User;

  constructor(
    private userService: UserService,
  ) {
    this.userService.getMe().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => {
        console.error(err);
      }
    });
    
  }
}
