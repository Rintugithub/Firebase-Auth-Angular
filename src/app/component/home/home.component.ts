import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert("Please login");
      this.router.navigate(['login']);

  }
  }

  logout(){
 this.auth.logOut();
 localStorage.removeItem('token');
  }

}
