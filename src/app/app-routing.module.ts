import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [
  {
    path: 'signup',
   component: FormComponent
  },
  {
    path:'signup/plans',
    component:PlansComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
