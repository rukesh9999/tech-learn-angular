import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchjobsettingsSearchComponent } from './batchjobsettings-search.component';

describe('BatchjobsettingsSearchComponent', () => {
  let component: BatchjobsettingsSearchComponent;
  let fixture: ComponentFixture<BatchjobsettingsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchjobsettingsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchjobsettingsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
