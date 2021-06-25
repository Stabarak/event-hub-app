import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RegisterRequestModel, TokenModel } from '../model/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUserData: RegisterRequestModel = {
    email: '',
    password: '',
  };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
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
