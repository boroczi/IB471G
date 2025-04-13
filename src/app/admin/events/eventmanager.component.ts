import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '../../shared/pipe/date.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {events} from '../../shared/constant/events.const';

@Component({
  selector: 'app-eventmanager',
  imports: [
    MatCardModule,
    MatTableModule,
    MatIconModule,
    DatePipe,
    MatExpansionModule,
    MatIconButton,
    MatFabButton
  ],
  templateUrl: './eventmanager.component.html',
  styleUrl: './eventmanager.component.scss'
})
export class EventManagerComponent {
  protected readonly DatePipe = DatePipe;
  protected readonly events = events;
}
