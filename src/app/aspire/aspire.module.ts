import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AspireRoutingModule } from './aspire-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { TraineeComponent } from './trainee/trainee.component';

console.log('aspire Module')

@NgModule({
  declarations: [
    EmployeeComponent,
    TraineeComponent
  ],
  imports: [
    CommonModule,
    AspireRoutingModule
  ]
})
export class AspireModule { }
