import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Rekvest } from '../models/request';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-requests',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  reukvests: Rekvest[] = [];

  constructor(
    private requestservice: RequestsService,
  ) {
        this.requestservice.getRequests().subscribe({
          next: (volunteers) => {
            this.reukvests = volunteers;
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
  
}
