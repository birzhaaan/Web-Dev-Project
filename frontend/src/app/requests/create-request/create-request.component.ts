import { Component } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-request',
  imports: [ReactiveFormsModule],
  templateUrl: './create-request.component.html',
  styleUrl: './create-request.component.css'
})
export class CreateRequestComponent {
  requestForm: FormGroup;
  description: string = '';
  errorMessage: string = '';

  constructor(
      private requestservice: RequestsService,
      private fb: FormBuilder,
      private router: Router
    ) {
      this.requestForm = this.fb.group({description: ['', Validators.required]});
    }
  onCreateRequest(): void {
    if (this.requestForm.invalid) return;

    const requestData = this.requestForm.value;

    this.requestservice.createRequest(
      requestData.description
    ).subscribe({
        next: () => {
          this.router.navigate(['/requests']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Error creating request.';
        }
     });
  }
}
