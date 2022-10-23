import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email == ''){
      alert("please enter your email")
      return;
    }if(this.password == ''){
      alert("please enter your password")
      return;
    }
    this.auth.logIn(this.email,this.password);
    this.email='';
    this.password='';
  }

}
