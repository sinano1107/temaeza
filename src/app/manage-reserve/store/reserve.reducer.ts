import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ReserveActions, ReserveActionTypes } from './reserve.actions';
import { Reserve } from '../../class/reserve';

export const reservesFeatureKey = 'reserves';

export interface State extends EntityState<Reserve> {
  loading: boolean;
}

export const adapter: EntityAdapter<Reserve> = createEntityAdapter<Reserve>();

export const initialState: State = adapter.getInitialState({
  loading: false,
});

export function reducer(
  state = initialState,
  action: ReserveActions
): State {
  switch (action.type) {

    // reserves読み込み時のリデューサー
    case ReserveActionTypes.LoadReserves: {
      console.debug('reserves読み込み時のリデューサー');
      return { ...state, loading: true };
    }

    // reserves読み込み成功時のリデューサー
    case ReserveActionTypes.LoadReservesSuccess: {
      console.debug('reserves読み込み成功時のリデューサー');
      return { ...adapter.addAll(action.payload.reserves, state), loading: false };
    }

    // reserves読み込み失敗時のリデューサー
    case ReserveActionTypes.LoadReservesFail: {
      console.debug('reserves読み込み失敗時のリデューサー');
      return { ...state, loading: false };
    }

    // reserve追加時のリデューサー
    case ReserveActionTypes.AddReserve: {
      console.debug('reserve追加時のリデューサー');
      return { ...state, loading: true };
    }

    // reserve削除時のリデューサー
    case ReserveActionTypes.DeleteReserve: {
      console.debug('reserve削除時のリデューサー');
      return { ...state, loading: true };
    }

    // reserve追加・削除成功時のリデューサー
    case ReserveActionTypes.WriteReserveSuccess: {
      console.debug('reserve追加・削除成功時のリデューサー');
      return { ...state, loading: false };
    }

    // reserve追加・削除失敗時のリデューサー
    case ReserveActionTypes.WriteReserveFail: {
      console.debug('reserve追加・削除失敗時のリデューサー');
      return { ...state, loading: false };
    }

    default: {
      return state;
    }
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
export const selectReserve = createFeatureSelector<State>('reserves');
export const getReserveLoading = createSelector(selectReserve, state => state.loading);
export const selectAllReserves = createSelector(selectReserve, selectAll);
