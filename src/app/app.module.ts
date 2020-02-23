import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

// ルート
const appRoutes: Routes = [
  { path: '', loadChildren: './manage-reserve/manage-reserve.module#ManageReserveModule' },
  { path: 'manage-now', loadChildren: './manage-now/manage-now.module#ManageNowModule' },
  { path: 'manage-user', loadChildren: './manage-user/manage-user.module#ManageUserModule' },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
