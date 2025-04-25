import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  username: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(
    private authService: AuthService,
    // private authService: 0,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;

    const credentials = this.loginForm.value;

    this.authService.login(
      credentials.username,
      credentials.password
    ).subscribe({
        next: () => {
          this.router.navigate(['/me']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Invalid username or password.';
        }
     });
  }
}

