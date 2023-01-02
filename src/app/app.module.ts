import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HeaderComponent } from './element/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfileComponent } from './monster/profile/profile.component';
import { UpdateProfileComponent } from './monster/update-profile/update-profile.component';
import { FriendListComponent } from './monster/friend-list/friend-list.component';
import { MonsterListComponent } from './monster/monster-list/monster-list.component';
import { MonsterCardComponent } from './monster/monster-card/monster-card.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ProfileComponent,
    UpdateProfileComponent,
    FriendListComponent,
    MonsterListComponent,
    MonsterCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
