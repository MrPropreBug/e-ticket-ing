import { Component, OnInit } from '@angular/core';
import { User } from '../../assets/services/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();


  constructor() { }

  ngOnInit(): void {
  }


  onLoggedin() {
    console.log(this.user);
  }
}
