import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchjobsettingsCreateComponent } from './batchjobsettings-create.component';

describe('BatchjobsettingsCreateComponent', () => {
  let component: BatchjobsettingsCreateComponent;
  let fixture: ComponentFixture<BatchjobsettingsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchjobsettingsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchjobsettingsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
