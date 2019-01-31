import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OperatorComponent } from './operator/operator.component';
import { OperatorDetailComponent } from './operator/operator-detail/operator-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from './backend.service';
import { AuthService } from './auth.service';
import { OperatorEditComponent } from './operator/operator-edit/operator-edit.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { OperatorCreateComponent } from './operator/operator-create/operator-create.component';
import { MapComponent } from './map/map.component';
import { MapEditComponent } from './map/map-edit/map-edit.component';
import { MapDetailComponent } from './map/map-detail/map-detail.component';
import { MapCreateComponent } from './map/map-create/map-create.component';
import { SeasonComponent } from './season/season.component';
import { SeasonDetailComponent } from './season/season-detail/season-detail.component';
import { SeasonEditComponent } from './season/season-edit/season-edit.component';
import { SeasonPopulateComponent } from './season/season-populate/season-populate.component';
import { OperatorPopoutComponent } from './operator/operator-popout/operator-popout.component';
import { MapPopoutComponent } from './map/map-popout/map-popout.component';
import { SeasonPopoutComponent } from './season/season-popout/season-popout.component';
import { OperatorService } from './operator.service';
import { MapService } from './map.service';
import { SeasonService } from './season.service';
import { UserService } from './user.service';
import { SeasonEditRichardComponent } from './season/season-edit-richard/season-edit-richard.component';
import { SeasonDeleteComponent } from './season/season-delete/season-delete.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { Browser } from 'protractor';
import { SeasonCreateformComponent } from './season/season-createform/season-createform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserLoginComponent,
    UserLogoutComponent,
    UserSignupComponent,
    HomeComponent,
    OperatorComponent,
    OperatorDetailComponent,
    OperatorEditComponent,
    UserDeleteComponent,
    UserEditComponent,
    OperatorCreateComponent,
    MapComponent,
    MapEditComponent,
    MapDetailComponent,
    MapCreateComponent,
    SeasonComponent,
    SeasonDetailComponent,
    SeasonEditComponent,
    SeasonPopulateComponent,
    OperatorPopoutComponent,
    MapPopoutComponent,
    SeasonPopoutComponent,
    SeasonEditRichardComponent,
    SeasonDeleteComponent,
    SeasonCreateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [HttpClientModule, BackendService, AuthGuard, AuthService, OperatorService, SeasonService, MapService, UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
