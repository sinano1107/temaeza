import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SessionEffects } from './store/effects/session.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([SessionEffects]),
    StoreDevtoolsModule.instrument({ // 追加
      maxAge: 25, // stateの上限を設定
      logOnly: environment.production, // 開発環境でのみ動作するよう制限
    }),
    EffectsModule.forRoot([SessionEffects]),
  ]
})
export class CoreModule { }
