import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = '/api/auth/login/';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post<{ access: string; refresh: string }>(this.loginUrl, body)
  }
  logout() {}
}
