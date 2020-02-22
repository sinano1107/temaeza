import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNowComponent } from './manage-now.component';

describe('ManageNowComponent', () => {
  let component: ManageNowComponent;
  let fixture: ComponentFixture<ManageNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
