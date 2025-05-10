import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '../../shared/pipe/date.pipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { events } from '../../shared/constant/events.const';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../shared/service/event.service';
import { IEvent } from '../../shared/interface/event.interface';
import { SnackbarService } from '../../shared/service/snackbar.service';

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
    ReactiveFormsModule,
  ],
  templateUrl: './eventmanager.component.html',
  styleUrl: './eventmanager.component.scss',
})
export class EventManagerComponent implements OnInit {
  protected readonly DatePipe = DatePipe;
  events: IEvent[] = [];

  eventForm: FormGroup;
  showForm: boolean = false;
  editMode: boolean = false;
  editingEventId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private SnackBar: SnackbarService
  ) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      availableTickets: [0, [Validators.required, Validators.min(1)]],
      totalTickets: [0, [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      ticketPrice: [0, [Validators.required, Validators.min(0)]],
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
      this.eventService.createEvent(newEvent)
      .then(() => {
        this.SnackBar.open('Az esemény sikeresen létrehozva!');
      })
      .catch(() => {
        this.SnackBar.open('Hiba lépett fel az esemény létrehozása közben!');
      });
    }
  }

  deleteEvent(eventId: string): void {
    this.eventService
      .deleteEvent(eventId)
      .then(() => {
        this.events = this.events.filter((event) => event.id !== eventId);
        this.SnackBar.open('Az esemény sikeresen törölve!');
      })
      .catch(() => {
        this.SnackBar.open('Hiba lépett fel az esemény törlése közben!');
      });
  }

  updateEvent(eventId: string, eventData: IEvent): void {
    this.editMode = true;
    this.editingEventId = eventId;
    this.showForm = true;

    this.eventForm.patchValue({
      name: eventData.name,
      location: eventData.location,
      startTime: eventData.startTime,
      endTime: eventData.endTime,
      availableTickets: eventData.availableTickets,
      totalTickets: eventData.totalTickets,
      description: eventData.description,
      ticketPrice: eventData.ticketPrice,
    });
  }

  saveUpdatedEvent(): void {
    if (this.eventForm.valid && this.editingEventId) {
      const updatedData = this.eventForm.value;
      this.eventService
        .updateEvent(this.editingEventId, updatedData)
        .then(() => {
          const eventIndex = this.events.findIndex(
            (event) => event.id === this.editingEventId
          );
          if (eventIndex !== -1) {
            this.events[eventIndex] = {
              ...this.events[eventIndex],
              ...updatedData,
            };
          }
          this.resetForm();
          this.SnackBar.open("Az esemény sikeresen módosítva!");
        })
        .catch(() => {
          this.SnackBar.open('Hiba lépett fel az esemény módosítása közben!');
        });
    }
  }

  resetForm(): void {
    this.editMode = false;
    this.editingEventId = null;
    this.showForm = false;
    this.eventForm.reset();
  }
}
