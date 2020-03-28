import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData);
    this.authService.register(this.registerUserData).subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
  }
}
