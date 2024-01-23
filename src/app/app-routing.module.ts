import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './sidenav/navbar/navbar.component';
import { DashpcComponent } from './pages/dashpc/dashpc.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: '',
    component: NavbarComponent,
    children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashpc', component: DashpcComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
