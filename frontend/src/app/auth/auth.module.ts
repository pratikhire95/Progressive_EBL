import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
<<<<<<< HEAD
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
=======
import { AuthComponent } from "./auth.component";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, UserComponent, UserListComponent, LogoutComponent],
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
<<<<<<< HEAD
    
=======
    LogoutComponent
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d
  ]
})
export class AuthModule {}
