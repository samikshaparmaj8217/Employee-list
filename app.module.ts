import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddempComponent } from './addemp/addemp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmppageComponent } from './emppage/emppage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LeavesComponent } from './leaves/leaves.component';
import { AddleavesComponent } from './addleaves/addleaves.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddempComponent,
    DashboardComponent,
    EmppageComponent,
    SidebarComponent,
    HeaderComponent,
    LeavesComponent,
    AddleavesComponent,
    ProfileComponent

 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
