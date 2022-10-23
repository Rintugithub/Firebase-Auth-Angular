import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }
  logIn(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then((res)=>{
      localStorage.setItem('token',"ghjnsjshsbhsjjsjsjshshghsjsu");
      this.router.navigate(['/home']);


    },err=>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }
  signUp(email:string,password:string){
   this.fireauth.createUserWithEmailAndPassword(email,password).then((res)=>{
    alert("user registred successfully");
    this.router.navigate(['/login']);

   },err=>{
    alert(err.message);
    this.router.navigate(['/login']);

   })
  }
  logOut(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err=>{
      alert(err.message);
    })
  }
  forgotPassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
     this.router.navigate(['/verifyemail']);
    },err=>{
      alert(err.message);
    })
  }
}
