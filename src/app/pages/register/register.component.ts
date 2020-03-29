import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData);
    this.authService.register(this.registerUserData).subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['special']);
      }, error => {
        console.log(error);
      });
  }
}
