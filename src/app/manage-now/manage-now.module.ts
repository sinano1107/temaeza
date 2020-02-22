import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageNowRoutingModule } from './manage-now-routing.module';
import { ManageNowComponent } from './manage-now/manage-now.component';
import { StoreModule } from '@ngrx/store';
import * as fromNow from './store/now.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NowEffects } from './store/now.effects';


@NgModule({
  declarations: [ManageNowComponent],
  imports: [
    CommonModule,
    ManageNowRoutingModule,
    StoreModule.forFeature(fromNow.nowsFeatureKey, fromNow.reducer),
    EffectsModule.forFeature([NowEffects])
  ]
})
export class ManageNowModule { }
