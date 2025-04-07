import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFabButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [
    MatCardModule,
    MatIconModule,
    MatFabButton,
    RouterLink
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
}
