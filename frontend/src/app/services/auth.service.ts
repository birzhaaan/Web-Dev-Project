import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api/auth/'
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };
    const tokens = this.http.post<{access: string, refresh: string}>(`${this.baseUrl}login/`, body);
    tokens.subscribe((response) => {
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
    });
    return tokens;
  }

  register(
    username: string,
    full_name: string,
    email: string,
    password: string,
    is_volunteer: boolean
  ) {
    const body = {
      username: username,
      full_name: full_name,
      email: email,
      password: password,
      is_volunteer: is_volunteer
    };
    return this.http.post(`${this.baseUrl}register/`, body)
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }
  getRefreshToken() {}
}
