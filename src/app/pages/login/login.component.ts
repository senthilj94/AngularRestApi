import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.login(this.loginUserData).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['special']);
    }, error => {
      console.log(error);
    });
  }
}
