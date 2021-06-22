import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from "./components/service/services/services.component";
import {LoginComponent} from "./components/log/login/login.component";
import {AboutComponent} from "./components/log/about/about.component";
import {ServiceAddComponent} from "./components/service/service-add/service-add.component";
import {ProfileViewComponent} from "./components/profile/profile-view/profile-view.component";
import {LogupComponent} from "./components/log/logup/logup.component";

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:LogupComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'service_add',component:ServiceAddComponent},
  {path:'profile',component:ProfileViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
