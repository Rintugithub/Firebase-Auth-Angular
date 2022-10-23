import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email:string='';
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  sendlink(){
   this.auth.forgotPassword(this.email);
   this.email = '';
  }

}
