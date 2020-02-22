import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Now } from '../../class/now';

export enum NowActionTypes {
  LoadNows = '[Now] Load Nows',
  LoadNowsSuccess = '[Now] Load Nows Success',
  LoadNowsFail = '[Now] Load Nows Fail',
  AddNow = '[Now] Add Now',
  UpdateNow = '[Now] Update Now',
  DeleteNow = '[Now] Delete Now',
  WriteNowSuccess = '[Now] Write Now Success',
  WriteNowFail = '[Now] Write Now Fail',
}

// Now読み込み時のアクション
export class LoadNows implements Action {
  readonly type = NowActionTypes.LoadNows;

  constructor(public payload: { nows: Now[] }) {}
}

// Now読み込み成功時のアクション
export class LoadNowsSuccess implements Action {
  readonly type = NowActionTypes.LoadNowsSuccess;

  constructor(public payload: { nows: Now[] }) {}
}

// Now読み込み失敗時のアクション
export class LoadNowsFail implements Action {
  readonly type = NowActionTypes.LoadNowsFail;

  constructor(public payload?: { error: any }) {}
}

// Now追加時のアクション
export class AddNow implements Action {
  readonly type = NowActionTypes.AddNow;

  constructor(public payload: { now: Now }) {}
}

// Now更新時のアクション
export class UpdateNow implements Action {
  readonly type = NowActionTypes.UpdateNow;

  constructor(public payload: { now: Update<Now> }) {}
}

// Now削除時のアクション
export class DeleteNow implements Action {
  readonly type = NowActionTypes.DeleteNow;

  constructor(public payload: { id: string }) {}
}

// Now書き換え成功時のアクション
export class WriteNowSuccess implements Action {
  readonly type = NowActionTypes.WriteNowSuccess;

  constructor(public payload?: { now: Now[] }) {}
}

// Now書き換え失敗時のアクション
export class WriteNowFail implements Action {
  readonly type = NowActionTypes.WriteNowFail;

  constructor(public payload?: { error: any }) {}
}

export type NowActions =
  LoadNows
  | LoadNowsSuccess
  | LoadNowsFail
  | AddNow
  | UpdateNow
  | DeleteNow
  | WriteNowSuccess
  | WriteNowFail;
