import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchjobsettingsEditComponent } from './batchjobsettings-edit.component';

describe('BatchjobsettingsEditComponent', () => {
  let component: BatchjobsettingsEditComponent;
  let fixture: ComponentFixture<BatchjobsettingsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchjobsettingsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchjobsettingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
