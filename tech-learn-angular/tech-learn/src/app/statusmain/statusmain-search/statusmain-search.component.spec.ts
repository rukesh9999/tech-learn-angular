import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusmainSearchComponent } from './statusmain-search.component';

describe('StatusmainSearchComponent', () => {
  let component: StatusmainSearchComponent;
  let fixture: ComponentFixture<StatusmainSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusmainSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusmainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
