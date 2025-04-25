import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-edit-user',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  editForm: FormGroup;
  username: string = '';
  full_name: string = '';
  email: string = '';
  password: string = '';
  is_volunteer: boolean = false;

  errorMessage: string = '';
  
  constructor(
    private userservice: UserService,
    private fb: FormBuilder,
    private router: Router
  ){
    this.editForm = this.fb.group({
      username: ['', Validators.required],
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      is_volunteer: [false, Validators.required],
    });
  }
  onUpdate(): void {
    if (this.editForm.invalid) return;

    const credentials: User = this.editForm.value;
    console.log(credentials);
    this.userservice.editMe(
      credentials
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
