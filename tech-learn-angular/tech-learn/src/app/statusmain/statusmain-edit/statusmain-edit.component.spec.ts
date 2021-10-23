import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusmainEditComponent } from './statusmain-edit.component';

describe('StatusmainEditComponent', () => {
  let component: StatusmainEditComponent;
  let fixture: ComponentFixture<StatusmainEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusmainEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusmainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
