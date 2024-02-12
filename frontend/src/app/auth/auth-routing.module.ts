import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD

const routes: Routes = [];
=======
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "users", component: UserListComponent },
  { path: "add-user", component: UserComponent },
];
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
