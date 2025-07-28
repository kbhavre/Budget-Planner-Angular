import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { SideNav } from './side-nav/side-nav';

const routes: Routes = [
  {path: 'login', component: Login},
  {path: 'side-nav', component: SideNav},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
