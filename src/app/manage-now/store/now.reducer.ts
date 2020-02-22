import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { NowActions, NowActionTypes } from './now.actions';
import { Now } from '../../class/now';

export const nowsFeatureKey = 'nows';

export interface State extends EntityState<Now> {
  loading: boolean;
}

export const adapter: EntityAdapter<Now> = createEntityAdapter<Now>();

export const initialState: State = adapter.getInitialState({
  loading: false,
});

export function reducer(
  state = initialState,
  action: NowActions
): State {
  switch (action.type) {

    // Nows読み込み時のリデューサー
    case NowActionTypes.LoadNows: {
      console.debug('Nows読み込み時のリデューサー');
      return { ...state, loading: true };
    }

    // Nows読み込み成功時のリデューサー
    case NowActionTypes.LoadNowsSuccess: {
      console.debug('Nows読み込み成功時のリデューサー');
      return { ...adapter.addAll(action.payload.nows, state), loading: false };
    }

    // Nows読み込み失敗時のリデューサー
    case NowActionTypes.LoadNowsFail: {
      console.debug('Nows読み込み失敗時のリデューサー');
      return { ...state, loading: false };
    }

    // Now追加時のリデューサー
    case NowActionTypes.AddNow: {
      console.debug('Now追加時のリデューサー');
      return { ...state, loading: true };
    }

    // Now更新時のリデューサー
    case NowActionTypes.UpdateNow: {
      console.debug('Now更新時のリデューサー');
      return { ...state, loading: true };
    }

    // Now削除時のリデューサー
    case NowActionTypes.DeleteNow: {
      console.debug('Now削除時のリデューサー');
      return { ...state, loading: true };
    }

    // Now書き換え成功時のリデューサー
    case NowActionTypes.WriteNowSuccess: {
      console.debug('Now書き換え成功時のリデューサー');
      return { ...state, loading: false };
    }

    // Now書き換え失敗時のリデューサー
    case NowActionTypes.WriteNowFail: {
      console.debug('Now書き換え失敗時のリデューサー');
      return { ...state, loading:false };
    }


    default: {
      return state;
    }
  }
}

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
export const selectNow = createFeatureSelector<State>('nows');
export const getNowLoadinng = createSelector(selectNow, state => state.loading);
export const selectAllNows = createSelector(selectNow, selectAll);
