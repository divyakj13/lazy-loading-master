import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../company/employee/employee.component';
import { TraineeComponent } from '../company/trainee/trainee.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'trainee',component:TraineeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
