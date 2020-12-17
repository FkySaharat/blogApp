import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const authRoutes: Routes = [{
  path:'auth',
  children:[
    {path:'signin',component: SigninComponent},
    {path:'signup',component: SignupComponent}
  ]
}]


@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
