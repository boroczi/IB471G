import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '../../shared/pipe/date.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {events} from '../../shared/constant/events.const';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../shared/service/event.service';
import { IEvent } from '../../shared/interface/event.interface';

@Component({
  selector: 'app-eventmanager',
  imports: [
    MatCardModule,
    MatTableModule,
    MatIconModule,
    DatePipe,
    MatExpansionModule,
    MatIconButton,
    MatFabButton,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  templateUrl: './eventmanager.component.html',
  styleUrl: './eventmanager.component.scss'
})
export class EventManagerComponent implements OnInit {
  protected readonly DatePipe = DatePipe;
  events: IEvent[] = [];

  eventForm: FormGroup;
  showForm: boolean = false;

  constructor(private fb: FormBuilder, private eventService: EventService) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      availableTickets: [0, [Validators.required, Validators.min(1)]],
      totalTickets: [0, [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      ticketPrice: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  async onSubmit(): Promise<void> {
    if (this.eventForm.valid) {
      const newEvent = this.eventForm.value;
      this.eventService.createEvent(newEvent);
    }
  }
}
