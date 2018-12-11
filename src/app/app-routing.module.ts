import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { OperatorComponent } from './operator/operator.component';
import { OperatorEditComponent } from './operator/operator-edit/operator-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  //default/home routes
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },

  //user routes
  {
    path:'login',
    component: UserLoginComponent
  },
  {
    path:'signup',
    component: UserSignupComponent
  },
  {
    path:'user/edit',
    component: UserEditComponent
  },
  {
    path:'user/delete',
    component: UserDeleteComponent
  },

  //operator routes
  {
    path:'operators',
    component: OperatorComponent
  },
  {
    path:'operator/edit',
    component: OperatorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
