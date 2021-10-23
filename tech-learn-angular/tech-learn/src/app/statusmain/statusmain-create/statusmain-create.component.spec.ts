import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusmainCreateComponent } from './statusmain-create.component';

describe('StatusmainCreateComponent', () => {
  let component: StatusmainCreateComponent;
  let fixture: ComponentFixture<StatusmainCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusmainCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusmainCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
