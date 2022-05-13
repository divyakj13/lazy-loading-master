import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { TraineeComponent } from './trainee/trainee.component';

console.log('company module')
@NgModule({
  declarations: [
    EmployeeComponent,
    TraineeComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
