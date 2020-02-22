import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ManageReserveRoutingModule } from './manage-reserve-routing.module';
import { ManageReserveComponent } from './manage-reserve/manage-reserve.component';
import { StoreModule } from '@ngrx/store';
import * as fromReserve from './store/reserve.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReserveEffects } from './store/reserve.effects';


@NgModule({
  declarations: [ManageReserveComponent],
  imports: [
    CommonModule,
    ManageReserveRoutingModule,
    StoreModule.forFeature(fromReserve.reservesFeatureKey, fromReserve.reducer),
    EffectsModule.forFeature([ReserveEffects]),
    FormsModule
  ]
})
export class ManageReserveModule { }
