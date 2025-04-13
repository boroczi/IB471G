import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '../shared/pipe/date.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFabButton} from '@angular/material/button';
import {events} from '../shared/constant/events.const';

@Component({
  selector: 'app-events',
    imports: [
        MatCardModule,
        MatTableModule,
        MatIconModule,
        DatePipe,
        MatExpansionModule,
        MatFabButton
    ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  protected readonly DatePipe = DatePipe;
  protected readonly events = events;
}
