import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Rekvest, RekvestExtended } from '../models/request';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ){}

  getRequests(): Observable<Rekvest[]>{
    const accessToken = this.authService.getAccessToken();
    return this.http.get<Rekvest[]>('http://localhost:8000/api/requests/')
  }
  getRequestbyId(id: number): Observable<Rekvest>{
    const accessToken = this.authService.getAccessToken();
    return this.http.get<Rekvest>(`http://localhost:8000/api/requests/${id}`)
  }

  createRequest(description: string): Observable<Rekvest> {
    const accessToken = this.authService.getAccessToken();
    const headers = {'Authorization': `Bearer ${accessToken}`}
    
    return this.http.post<Rekvest>(
      'http://localhost:8000/api/requests/',
      {description: description},
      {headers: headers}
    );
  }
}
