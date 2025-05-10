import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User, Auth, authState} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<User | null>;

  constructor(private auth: Auth, private router: Router) {
    this.currentUser = authState(this.auth);
  }
}
