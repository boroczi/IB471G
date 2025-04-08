import {Component} from '@angular/core';
import {EventManagerComponent} from './events/eventmanager.component';
import {UserManagerComponent} from './users/usermanager.component';

@Component({
  selector: 'app-admin',
  imports: [
    EventManagerComponent,
    UserManagerComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
