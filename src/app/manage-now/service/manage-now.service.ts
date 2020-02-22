import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Now } from '../../class/now';
import * as fromNow from '../store/now.reducer';
import { LoadNows, AddNow, UpdateNow, DeleteNow } from '../store/now.actions';

@Injectable({
  providedIn: 'root'
})
export class ManageNowService {

  constructor(private store: Store<fromNow.State>) {
    this.store.dispatch(new LoadNows({ nows: [] }));
  }

  // nowの追加
  add(now: Now) {
    this.store.dispatch(new AddNow({
      now: now
    }));
  }

  // nowの更新(campusIdのみ)
  update(id: string, now: Now) {
    this.store.dispatch(new UpdateNow({
      now: {id: id, changes: now}
    }))
  }

  // nowの削除
  delete(id: string) {
    this.store.dispatch(new DeleteNow({
      id: id
    }))
  }
}
