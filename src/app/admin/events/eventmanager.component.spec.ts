import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerComponent } from './eventmanager.component';

describe('EventsComponent', () => {
  let component: EventManagerComponent;
  let fixture: ComponentFixture<EventManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
