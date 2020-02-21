import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageReserveComponent } from './manage-reserve/manage-reserve.component';


const routes: Routes = [
  { path: '', component: ManageReserveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageReserveRoutingModule { }
