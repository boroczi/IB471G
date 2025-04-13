import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {users} from '../../shared/constant/users.const';

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
  protected readonly users = users;
}
