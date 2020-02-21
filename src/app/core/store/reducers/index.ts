import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';


export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

export function logger(reducer: ActionReducer<State>) { // 追加
  return (state, action) => {
    const newState = reducer(state, action);
    console.log('action', action);
    console.log('state', newState);
    return newState;
  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
