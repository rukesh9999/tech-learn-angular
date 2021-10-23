import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmailsListComponent } from './readmails-list.component';

describe('ReadmailsListComponent', () => {
  let component: ReadmailsListComponent;
  let fixture: ComponentFixture<ReadmailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadmailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
