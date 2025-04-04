import {Component, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {INavItem} from '../shared/interface/navitem.interface';

@Component({
  selector: 'app-navbar',
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

  toggle() : void {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  protected readonly navItems = navItems;
}

const navItems : INavItem[] = [
  {label: '< Vissza', role: 'user', mobileOnly: true},
  {label: 'Home', role: 'user', routerLink: '/'},
  {label: 'Tickets', role: 'user', routerLink: '/tickets'},
  {label: 'Users', role: 'user', routerLink: '/users'},
  {label: 'Settings', role: 'user', routerLink: '/settings'},
  {label: 'Logout', role: 'user', routerLink: '/logout'}
];
