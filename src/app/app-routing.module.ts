import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LocationComponent } from './location/location.component';
import { LayoutComponent } from './layout/layout.component';
import { BookedComponent } from './booked/booked.component';
import { TableComponent } from './table/table.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:"login",component:LoginComponent
  },
   {
    path:"adminlogin",component:AdminloginComponent
  },
  {
    path:"adminregister",component:AdminregisterComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"location",component:LocationComponent
  },
  {
    path:"layout",component:LayoutComponent
  },
  {
    path:"booked",component:BookedComponent
  },
  {
    path:"table",component:TableComponent
  },
  {
    path:"*", component:PagenotfoundComponent
  },
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
