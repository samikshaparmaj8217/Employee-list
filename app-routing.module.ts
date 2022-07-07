import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmppageComponent } from './emppage/emppage.component';
import { AddempComponent } from './addemp/addemp.component';
import { LeavesComponent } from './leaves/leaves.component';
import { AddleavesComponent } from './addleaves/addleaves.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"",component:AdminComponent},
  // {path:"admin",component:AdminComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"emppage",component:EmppageComponent},
  {path:"addemp",component:AddempComponent},
  {path:"leaves",component:LeavesComponent},
  {path:"addleaves",component:AddleavesComponent},
  {path:"profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
