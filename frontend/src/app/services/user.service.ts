import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Volunteer } from '../models/volunteer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ){}
  getMe(): Observable<User> {
    const accessToken = this.authService.getAccessToken();
    return this.http.get<User>(
      'http://localhost:8000/api/users/me/', 
      {headers: {
        'Authorization': `Bearer ${accessToken}`
      }}
    )
  }
  editMe(userdata: User): Observable<User>{
    const accessToken = this.authService.getAccessToken();
    return this.http.put<User>(
      'http://localhost:8000/api/users/me/',
      userdata,
      {
        headers: {'Authorization': `Bearer ${accessToken}`},
      }
    )
  }
  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(
      'http://localhost:8000/api/volunteers/', 
    )
  }
  getUserbyId(id: number): Observable<User> {
    const accessToken = this.authService.getAccessToken();
    return this.http.get<User>(
      `http://localhost:8000/api/users/${id}/`, 
      {headers: {
        'Authorization': `Bearer ${accessToken}`
      }}
    )
  }
  getVolunteerbyId(id: number): Observable<Volunteer> {
    const accessToken = this.authService.getAccessToken();
    return this.http.get<Volunteer>(
      `http://localhost:8000/api/volunteers/${id}/`, 
      {headers: {
        'Authorization': `Bearer ${accessToken}`
      }}
    )
  }
  getVolunteerbyUserId(id: number): Observable<Volunteer> {
    const accessToken = this.authService.getAccessToken();
    return this.http.get<Volunteer>(
      `http://localhost:8000/api/volunteers/?user=${id}`, 
      {headers: {
        'Authorization': `Bearer ${accessToken}`
      }}
    )
  }

}
