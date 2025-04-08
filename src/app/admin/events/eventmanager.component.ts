import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {IEvent} from '../../shared/interface/event.interface';
import {DatePipe} from '../../shared/pipe/date.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFabButton} from '@angular/material/button';

@Component({
  selector: 'app-eventmanager',
    imports: [
        MatCardModule,
        MatTableModule,
        MatIconModule,
        DatePipe,
        MatExpansionModule,
        MatFabButton
    ],
  templateUrl: './eventmanager.component.html',
  styleUrl: './eventmanager.component.scss'
})
export class EventManagerComponent {
  events: IEvent[] = [
    {
      id: 1,
      name: 'Koncert A',
      location: 'IH',
      startTime: new Date('2025-04-01T19:00:00'),
      endTime: new Date('2025-04-01T22:00:00'),
      description: 'A great concert featuring popular bands.',
      totalTickets: 500,
      availableTickets: 200,
      ticketPrice: 50
    },
    {
      id: 2,
      name: 'Koncert B',
      location: 'Budapest Park',
      startTime: new Date('2025-05-15T12:00:00'),
      endTime: new Date('2025-05-15T23:00:00'),
      description: 'An all-day festival with food, music, and fun activities.',
      totalTickets: 1000,
      availableTickets: 750,
      ticketPrice: 30
    },
    {
      id: 3,
      name: 'Koncert C',
      location: 'MVM Dome',
      startTime: new Date('2025-06-20T18:00:00'),
      endTime: new Date('2025-06-20T21:00:00'),
      description: 'A captivating play performed by renowned actors.',
      totalTickets: 300,
      availableTickets: 50,
      ticketPrice: 40
    }
  ];

  protected readonly DatePipe = DatePipe;
}
