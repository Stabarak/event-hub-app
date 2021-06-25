import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRequestModel } from '../model/login.model';
import { RegisterRequestModel, TokenModel } from '../model/register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = `http://localhost:3000/api/register`;
  private _loginUrl = `http://localhost:3000/api/login`;

  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user: RegisterRequestModel): Observable<TokenModel> {
    return this.http.post<TokenModel>(this._registerUrl, user);
  }

  loginUser(user: LoginRequestModel): Observable<TokenModel> {
    return this.http.post<TokenModel>(this._loginUrl, user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logoutUser(): void {
    localStorage.removeItem('token');
    this._router.navigateByUrl('/events');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
