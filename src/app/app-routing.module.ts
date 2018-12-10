import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { OperatorComponent } from './operator/operator.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
},
{
  path:'home',
  component: HomeComponent
},
{
  path:'operators',
  component: OperatorComponent
},
{
  path:'login',
  component: UserLoginComponent
},
{
  path:'signup',
  component: UserSignupComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
