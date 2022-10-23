import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string = '';
  password:string = '';
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  signup(){
    if(this.email == ''){
      alert("please enter your email")
      return;
    }if(this.password == ''){
      alert("please enter your password")
      return;
    }
    this.auth.signUp(this.email,this.password);
    this.email='';
    this.password='';
  }

}
