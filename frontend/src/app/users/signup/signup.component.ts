import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  username: string = '';
  password: string = '';
  full_name: string = '';
  email: string = '';
  is_volunteer: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      is_volunteer: [false],
    });
  }
  onSignUp(): void {
    if (this.signupForm.invalid) return;

    const credentials = this.signupForm.value;
    console.log(credentials);
    this.authService.register(
      credentials.username,
      credentials.full_name,
      credentials.email,
      credentials.password,
      credentials.is_volunteer
    ).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Invalid data';
        }
     });
  }
}
