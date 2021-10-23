import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCreateComponent } from './tech-create.component';

describe('TechCreateComponent', () => {
  let component: TechCreateComponent;
  let fixture: ComponentFixture<TechCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
