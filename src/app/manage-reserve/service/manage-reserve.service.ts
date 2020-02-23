import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/firestore';

import { Reserve } from '../../class/reserve';
import * as fromReserve from '../store/reserve.reducer';
import { LoadReserves, AddReserve, DeleteReserve } from '../store/reserve.actions';

@Injectable({
  providedIn: 'root'
})
export class ManageReserveService {

  constructor(private store: Store<fromReserve.State>,
              private db: AngularFirestore) {
    this.store.dispatch(new LoadReserves({ reserves: [] }))
  }

  // reserveの追加
  add(reserve: Reserve): void {
    this.store.dispatch(new AddReserve({
      reserve: reserve
    }))
  }

  // reserveの削除
  delete(id: string): void {
    this.store.dispatch(new DeleteReserve({
      id: id
    }))
    this.reserveDataDelete(id);
  }

  // reserveを削除する際、それに対応したreserveDataを削除する
  private reserveDataDelete(reserveId: string) {
    this.db.collection('communities')
      .doc('g3Xnp6T1S9xwsDhZLyYZ')
      .collection('reserveDatas')
      .snapshotChanges().subscribe(
        reserveDatas => reserveDatas.map(reserveData => {
          const data = reserveData.payload.doc.data();

          if (data.reserveId == reserveId) {
            const id = reserveData.payload.doc.id;
            this.db.collection('communities')
              .doc('g3Xnp6T1S9xwsDhZLyYZ')
              .collection('reserveDatas')
              .doc(id)
              .delete()
              .then(() => console.debug(`${id}:削除完了`))
              .catch(() => console.debug(`${id}:削除失敗`));
          }

        })
      )
  }

}
