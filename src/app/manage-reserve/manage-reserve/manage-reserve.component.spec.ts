import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReserveComponent } from './manage-reserve.component';

describe('ManageReserveComponent', () => {
  let component: ManageReserveComponent;
  let fixture: ComponentFixture<ManageReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
