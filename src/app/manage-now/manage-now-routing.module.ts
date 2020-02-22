import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageNowComponent } from './manage-now/manage-now.component';


const routes: Routes = [
  { path: '', component: ManageNowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageNowRoutingModule { }
