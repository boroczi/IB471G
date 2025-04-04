import {Component, ViewChild} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {RouterLink} from '@angular/router';
import {MatListItem, MatNavList} from '@angular/material/list';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatNavList,
    MatListItem
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
