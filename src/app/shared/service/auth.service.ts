import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  User,
  Auth,
  authState,
  UserCredential,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { IUser } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: Observable<User | null>;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {
    this.currentUser = authState(this.auth);
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<UserCredential> {
    try {
      const userCred = createUserWithEmailAndPassword(this.auth, email, password);

      await this.createUserData((await userCred).user.uid, {
        id: (await userCred).user.uid,
        firstName: firstName,
        lastName: lastName,
        role: 'user'
      })

      return userCred;
    } catch (error) {
      throw error;
    }
  }

  private async createUserData(userId: string, userData: Partial<IUser>): Promise<void> {
    const userRef = doc(collection(this.firestore, 'users'), userId);
    
    return setDoc(userRef, userData);
  }

  signOut(): Promise<void> {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user');
    return signOut(this.auth);
  }

  isLoggedIn(): Observable<User | null> {
    return this.currentUser;
  }

  updateLoginStatus(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }
}
