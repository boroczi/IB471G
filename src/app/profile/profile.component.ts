import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';
import {IUser} from '../shared/interface/user.interface';

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
  user: IUser = {
    id: 1,
    username: "test",
    password: "test",
    email: "test@test.com",
    firstName: "Test",
    lastName: "User",
    role: "admin"
  };
}
