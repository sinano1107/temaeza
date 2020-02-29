import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Update } from '@ngrx/entity';

import { Now } from '../../class/now';
import {
  NowActionTypes,
  LoadNows,
  LoadNowsSuccess,
  LoadNowsFail,
  AddNow,
  UpdateNow,
  DeleteNow,
  WriteNowSuccess,
  WriteNowFail,
} from './now.actions';


@Injectable()
export class NowEffects {

  constructor(private actions$: Actions,
              private db: AngularFirestore) {}

  // nows読み込み時のエフェクト
  @Effect()
  LoadNow$: Observable<Action> =
    this.actions$.pipe(
      ofType<LoadNows>(NowActionTypes.LoadNows),
      map(action => action.payload.nows),
      switchMap(() => {
        return this.db.collection('communities')
          .doc('g3Xnp6T1S9xwsDhZLyYZ')
          .collection('nows')
          .snapshotChanges().pipe(
            map(nows => nows.map(now => {
              const data = now.payload.doc.data();
              const id = now.payload.doc.id;
              return new Now(data.uid, data.campusId, data.time, id);
            })),
            map((result: Now[]) => {
              return new LoadNowsSuccess({
                nows: result
              })
            }),
            catchError(this.handleNowsError(
              'fetchNows', new LoadNowsFail
            ))
          )
      })
    )

  // nows追加時のエフェクト
  @Effect()
  AddNowsData$: Observable<Action> =
    this.actions$.pipe(
      ofType<AddNow>(NowActionTypes.AddNow),
      map(action => action.payload.now),
      switchMap((now: Now) => {
        return this.db.collection('communities')
          .doc('g3Xnp6T1S9xwsDhZLyYZ')
          .collection('nows')
          .add(now.deserialize())
          .then(() => new WriteNowSuccess())
          .catch(() => new WriteNowFail({ error: 'failed to add' }));
      })
    )

  // nows更新時のエフェクト
  @Effect()
  updateNow$: Observable<Action> =
    this.actions$.pipe(
      ofType<UpdateNow>(NowActionTypes.UpdateNow),
      map(action => action.payload.now),
      switchMap((now: Update<Now>) => {
        return this.db.collection('communities')
          .doc('g3Xnp6T1S9xwsDhZLyYZ')
          .collection('nows')
          .doc(now.id.toString())
          .update({
            campusId: now.changes.campusId,
          })
          .then(() => new WriteNowSuccess())
          .catch(() => new WriteNowFail({ error: 'failed to update' }));
      })
    )

  // nows削除時のエフェクト
  @Effect()
  deleteNow: Observable<Action> =
    this.actions$.pipe(
      ofType<DeleteNow>(NowActionTypes.DeleteNow),
      map(action => action.payload.id),
      switchMap((id: string) => {
        return this.db.collection('communities')
        .doc('g3Xnp6T1S9xwsDhZLyYZ')
        .collection('nows')
        .doc(id)
        .delete()
        .then(() => new WriteNowSuccess)
        .catch(() => new WriteNowFail({ error: 'failed to delete' }));
      })
    )

  // エラー発生時の処理
  private handleNowsError<T>(operation = 'operation', result: T) {
    return (error: any): Observable<T> => {

      // 失敗した処理の名前、エラーログをコンソールに出力
      console.error(`${operation} failed: ${error.message}`);

      // 結果を返して、アプリを持続可能nにする
      return of(result as T);
    }
  }

}
