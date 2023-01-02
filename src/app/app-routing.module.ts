import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { FriendListComponent } from './monster/friend-list/friend-list.component';
import { MonsterListComponent } from './monster/monster-list/monster-list.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';

const routes: Routes = [
  { path : '', component : LandingPageComponent},
  { path : 'inscription', component : SignUpComponent},
  { path : 'dashboard', component : DashboardComponent, canActivate:[AuthGuard]},
  { path : 'find-friends', component : MonsterListComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
