import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { LoginRequestModel } from '../model/login.model';
import { TokenModel } from '../model/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUserData: LoginRequestModel = {
    email: '',
    password: '',
  };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser(): void {
    this._auth.loginUser(this.loginUserData).subscribe(
      (response: TokenModel) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this._router.navigate(['/special']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
