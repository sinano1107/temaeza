import { Action } from '@ngrx/store';
import { Reserve } from '../../class/reserve';

export enum ReserveActionTypes {
  LoadReserves = '[Reserve] Load Reserves',
  LoadReservesSuccess = '[Reserve] Load Reserves Success',
  LoadReservesFail = '[Reserve] Load Reserves Fail',
  AddReserve = '[Reserve] Add Reserve',
  DeleteReserve = '[Reserve] Delete Reserve',
  WriteReserveSuccess = '[Reserve] Write Reserve Success',
  WriteReserveFail = '[Reserve] Write Reserve Fail',
}

// reserves読み込み時のアクション
export class LoadReserves implements Action {
  readonly type = ReserveActionTypes.LoadReserves;

  constructor(public payload: { reserves: Reserve[] }) {}
}

// reserves読み込み成功時のアクション
export class LoadReservesSuccess implements Action {
  readonly type = ReserveActionTypes.LoadReservesSuccess;

  constructor(public payload: { reserves: Reserve[] }) {}
}

// reserves読み込み失敗時のアクション
export class LoadReservesFail implements Action {
  readonly type = ReserveActionTypes.LoadReservesFail;

  constructor(public payload?: { error: any }) {}
}

// reserve追加時のアクション
export class AddReserve implements Action {
  readonly type = ReserveActionTypes.AddReserve;

  constructor(public payload: { reserve: Reserve }) {}
}

// reserve削除時のアクション
export class DeleteReserve implements Action {
  readonly type = ReserveActionTypes.DeleteReserve;

  constructor(public payload: { id: string }) {}
}

// reserve追加・削除成功時のアクション
export class WriteReserveSuccess implements Action {
  readonly type = ReserveActionTypes.WriteReserveSuccess;

  constructor(public payload?: { reserves: Reserve[] }) {}
}

// reserve追加・削除失敗時のアクション
export class WriteReserveFail implements Action {
  readonly type = ReserveActionTypes.WriteReserveFail;

  constructor(public payload?: { error: any }) {}
}



export type ReserveActions =
  LoadReserves
  | LoadReservesSuccess
  | LoadReservesFail
  | AddReserve
  | DeleteReserve
  | WriteReserveSuccess
  | WriteReserveFail;
