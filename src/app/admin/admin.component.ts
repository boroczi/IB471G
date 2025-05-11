import {Component} from '@angular/core';
import {EventManagerComponent} from './events/eventmanager.component';

@Component({
  selector: 'app-admin',
  imports: [
    EventManagerComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
