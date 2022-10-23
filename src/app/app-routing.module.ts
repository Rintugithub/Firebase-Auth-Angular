import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'verifyemail',component:VerifyemailComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
