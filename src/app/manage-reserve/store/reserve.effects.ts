import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Reserve } from '../../class/reserve';
import {
  ReserveActionTypes,
  LoadReserves,
  LoadReservesSuccess,
  LoadReservesFail,
  AddReserve,
  DeleteReserve,
  WriteReserveSuccess,
  WriteReserveFail,
} from './reserve.actions';


@Injectable()
export class ReserveEffects {

  constructor(private actions$: Actions,
              private db: AngularFirestore) {}

  // reserves読み込み時のエフェクト
  @Effect()
  LoadReserve$: Observable<Action> =
    this.actions$.pipe(
      ofType<LoadReserves>(ReserveActionTypes.LoadReserves),
      map(action => action.payload.reserves),
      switchMap(() => {

        return this.db.collection('communities')
          .doc('g3Xnp6T1S9xwsDhZLyYZ')
          .collection('reserves')
          .snapshotChanges().pipe(
            map(reserves => reserves.map(reserve => {
              const data = reserve.payload.doc.data();
              const id = reserve.payload.doc.id;
              return new Reserve(data.date, data.compulsion, id);
            })),
            map((result: Reserve[]) => {
              return new LoadReservesSuccess({
                reserves: result
              })
            }),
            catchError(this.handleReservesError(
              'fetchReserves', new LoadReservesFail
            ))
          )
      })
    )

  // reserve追加時のエフェクト
  @Effect()
  AddReserve$: Observable<Action> =
    this.actions$.pipe(
      ofType<AddReserve>(ReserveActionTypes.AddReserve),
      map(action => action.payload.reserve),
      switchMap((reserve: Reserve) => {
        return this.db.collection('communities')
          .doc('g3Xnp6T1S9xwsDhZLyYZ')
          .collection('reserves')
          .add(reserve.deserialize())
          .then(() => new WriteReserveSuccess())
          .catch(() => new WriteReserveFail({ error: 'failed to add' }));
      })
    )

  // reserve削除時のエフェクト
  @Effect()
  deleteReserve: Observable<Action> =
    this.actions$.pipe(
      ofType<DeleteReserve>(ReserveActionTypes.DeleteReserve),
      map(action => action.payload.id),
      switchMap((id: string) => {
        return this.db.collection('communities')
          .doc('g3Xnp6T1S9xwsDhZLyYZ')
          .collection('reserves')
          .doc(id)
          .delete()
          .then(() => new WriteReserveSuccess())
          .catch(() => new WriteReserveFail({ error: 'failed to delete' }));
      })
    )

  // エラー発生時の処理
  private handleReservesError<T>(operation = 'operation', result: T) {
    return (error: any): Observable<T> => {

      // 失敗した処理の名前、エラーログをコンソールに出力
      console.error(`${operation} failed: ${error.message}`);

      // 結果を返して、アプリを持続可能にする
      return of(result as T);
    }
  }

}
