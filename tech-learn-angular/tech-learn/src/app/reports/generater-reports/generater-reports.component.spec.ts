import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraterReportsComponent } from './generater-reports.component';

describe('GeneraterReportsComponent', () => {
  let component: GeneraterReportsComponent;
  let fixture: ComponentFixture<GeneraterReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraterReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraterReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
