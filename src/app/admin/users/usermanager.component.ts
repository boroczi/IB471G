import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import { IUser } from '../../shared/interface/user.interface';

@Component({
  selector: 'app-usermanager',
  imports: [
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatIconButton,
    MatFabButton
  ],
  templateUrl: './usermanager.component.html',
  styleUrl: './usermanager.component.scss'
})
export class UserManagerComponent {
  users: IUser[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin123',
      email: 'admin@example.com',
      firstName: 'Admin',
      lastName: 'User',
      role: 'admin'
    },
    {
      id: 2,
      username: 'johndoe',
      password: 'password123',
      email: 'johndoe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      role: 'user'
    },
    {
      id: 3,
      username: 'janedoe',
      password: 'password456',
      email: 'janedoe@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      role: 'user'
    }
  ];
}
