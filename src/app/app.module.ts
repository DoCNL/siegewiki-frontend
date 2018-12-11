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
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BackendService, AuthGuard, AuthService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
