import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.login(this.loginUserData).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
}
