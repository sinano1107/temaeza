import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Reserve } from '../../class/reserve';
import * as fromReserve from '../store/reserve.reducer';
import { LoadReserves, AddReserve, DeleteReserve } from '../store/reserve.actions';

@Injectable({
  providedIn: 'root'
})
export class ManageReserveService {

  constructor(private store: Store<fromReserve.State>) {
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
  }

}
