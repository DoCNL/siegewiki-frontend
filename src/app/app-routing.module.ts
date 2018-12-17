import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { OperatorComponent } from './operator/operator.component';
import { OperatorEditComponent } from './operator/operator-edit/operator-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { UserComponent } from './user/user.component';
import { OperatorCreateComponent } from './operator/operator-create/operator-create.component';
import { MapEditComponent } from './map/map-edit/map-edit.component';
import { MapCreateComponent } from './map/map-create/map-create.component';
import { MapComponent } from './map/map.component';
import { SeasonComponent } from './season/season.component';
import { SeasonCreateComponent } from './season/season-create/season-create.component';
import { SeasonEditComponent } from './season/season-edit/season-edit.component';
import { SeasonPopulateComponent } from './season/season-populate/season-populate.component';
import { OperatorPopoutComponent } from './operator/operator-popout/operator-popout.component';
import { MapPopoutComponent } from './map/map-popout/map-popout.component';
import { SeasonPopoutComponent } from './season/season-popout/season-popout.component';
import { AuthGuard } from './auth.guard';

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
    path:'user',
    component: UserComponent
  },
  {
    path:'login',
    component: UserLoginComponent
  },
  {
    path:'logout',
    component: UserLogoutComponent
  },
  {
    path:'signup',
    component: UserSignupComponent
  },
  {
    path:'user/edit',
    component: UserEditComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'user/delete',
    component: UserDeleteComponent,
    canActivate: [AuthGuard] 
  },

  //operator routes
  {
    path:'operators',
    component: OperatorComponent
  },
  {
    path:'operator/:id',
    component: OperatorPopoutComponent
  },
  {
    path:'operator/create',
    component: OperatorCreateComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'operator/edit',
    component: OperatorEditComponent
  },

  //Map routes
  {
    path:'maps',
    component: MapComponent
  },
  {
    path:'map/:id',
    component: MapPopoutComponent
  },
  {
    path:'map/create',
    component: MapCreateComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'map/edit',
    component: MapEditComponent
  },

  //Season routes
  {
    path:'seasons',
    component: SeasonComponent
  },
  {
    path:'season/:id',
    component: SeasonPopoutComponent
  },
  {
    path:'season/create',
    component: SeasonCreateComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'season/edit',
    component: SeasonEditComponent
  },
  {
    path:'season/populate',
    component: SeasonPopulateComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
