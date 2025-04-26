import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { not } from 'rxjs/internal/util/not';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  isLoggedIn: boolean = false;
  constructor(
    private authService: AuthService
  ){
    if (this.authService.getAccessToken() !== null) {
      this.isLoggedIn = true;
    }
  }
}
