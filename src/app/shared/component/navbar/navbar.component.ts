import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {IUser} from '../../interface/user.interface';
import {AuthComponent} from '../../../auth/auth.component';
import {LoginComponent} from '../../../auth/login/login.component';
import {SignupComponent} from '../../../auth/signup/signup.component';
import {EAuth} from '../../enum/auth.enum';
import {SnackbarService} from '../../service/snackbar.service';
import {INavItem} from '../../interface/navitem.interface';
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatNavList,
    MatListItem,
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  showAuth: boolean = false;
  authModal: EAuth = EAuth.auth;
  protected readonly navItems: INavItem[] = [
    {label: 'Vissza', mobileOnly: true},
    {label: 'Főoldal', routerLink: '/'},
    {label: 'Események', routerLink: '/events'},
    {label: 'Profil', role: 'user', routerLink: '/profile'},
    {label: 'Admin', role: 'admin', routerLink: '/admin'},
    {label: 'Kosár', role: 'user', routerLink: '/checkout'},
    {label: 'Bejelentkezés', click: () => this.toggleAuth(), isLogout: false},
    {label: 'Kijelentkezés', role: 'user', isLogout: true},
  ];

  user: Partial<IUser> | null;

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.user = localStorage.getItem('user') as Partial<IUser>;
    }
  }

  constructor(private SnackBar: SnackbarService, private authService: AuthService) {
    this.user = null;
  }

  setUser(user: Partial<IUser>) : void {
    this.user = user;
    this.closeAuth();
  }

  toggle(): void {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.setItem('isLoggedIn', 'false');
    this.authService.signOut;
    this.SnackBar.open("Sikeresen kijelentkeztél!")
  }

  closeAuth(): void {
    if (this.showAuth) {
      this.authModal = EAuth.auth;
    }

    this.showAuth = false;
  }

  toggleAuth(): void {
    if (this.sidenav) {
      this.sidenav.close();
    }

    if (this.showAuth) {
      this.authModal = EAuth.auth;
    }

    this.showAuth = !this.showAuth;
  }

  changeModal(modal: EAuth): void {
    this.authModal = modal;
  }

  protected readonly EAuth = EAuth;
}
