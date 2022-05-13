import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'aspire',loadChildren:()=>import('./aspire/aspire.module').then(mod=>mod.AspireModule)},
  {path:'company',loadChildren:()=>import('./company/company.module').then(mod=>mod.CompanyModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
