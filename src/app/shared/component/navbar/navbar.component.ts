import {Component, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {INavItem} from '../../interface/navitem.interface';
import {IUser} from '../../interface/user.interface';
import { LocalstorageService } from '../../service/localstorage.service';

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

  protected readonly navItems : INavItem[] = [
    {label: 'Vissza', mobileOnly: true},
    {label: 'Főoldal', routerLink: '/'},
    {label: 'Események', routerLink: '/events'},
    {label: 'Profil', role: 'user', routerLink: '/profile'},
    {label: 'Admin', role: 'admin', routerLink: '/admin'},
    {label: 'Kijelentkezés', role: 'user', isLogout: true},
  ];

  user: Partial<IUser> | null;

  constructor(private localStorage: LocalstorageService) {
    this.user = this.localStorage.getItem('user') as Partial<IUser> || null;
  }

  toggle() : void {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  logout() : void {
    this.localStorage.removeItem('user');
    console.log('logout');
  }
}
