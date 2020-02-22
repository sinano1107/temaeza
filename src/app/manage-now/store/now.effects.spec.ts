import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NowEffects } from './now.effects';

describe('NowEffects', () => {
  let actions$: Observable<any>;
  let effects: NowEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NowEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<NowEffects>(NowEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
