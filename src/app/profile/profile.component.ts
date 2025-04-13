import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';
import {user} from '../shared/constant/user.const';

@Component({
  selector: 'app-profile',
  imports: [
    MatCardModule,
    MatIconModule,
    MatFabButton
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  protected readonly user = user;
}
