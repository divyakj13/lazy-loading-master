import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../aspire/employee/employee.component';
import { TraineeComponent } from '../aspire/trainee/trainee.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'trainee',component:TraineeComponent},
  // {path:'',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspireRoutingModule { }
