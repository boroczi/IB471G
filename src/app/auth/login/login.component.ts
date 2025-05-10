import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton, MatIconButton} from '@angular/material/button';
import {SnackbarService} from '../../shared/service/snackbar.service';
import {IUser} from '../../shared/interface/user.interface';
import {MatIcon} from '@angular/material/icon';
import {EAuth} from '../../shared/enum/auth.enum';
import {AuthService} from '../../shared/service/auth.service';
import { Subscription } from 'rxjs';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    MatCardModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    MatButton,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton
  ],
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  @Output() user: EventEmitter<Partial<IUser>> = new EventEmitter<Partial<IUser>>();
  @Input() changeModal!: (modal: EAuth) => void;
  @Input() closeModal!: () => void;
  private authSubscription?: Subscription;

  constructor(private fb: FormBuilder, private SnackBar: SnackbarService, private firestore: Firestore, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      this.SnackBar.open("A megadott adatok érvénytelenek!");
      return;
    }

    await this.authService.signIn(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
      .then(async (result) => {
        const userDocRef = doc(this.firestore, "users", result.user.uid);
        const userSnapshot = await getDoc(userDocRef);

        if (!userSnapshot.exists()) {
          this.SnackBar.open("Hiba lépett fel a felhasználó adatainak lekérése közben!");
          return;
        }

        const userData = userSnapshot.data() as Partial<IUser>;

        localStorage.setItem('user', JSON.stringify({
          id: result.user.uid,
          email: this.loginForm.get('email')?.value,
          lastName: userData.lastName,
          firstName: userData.firstName,
          role: userData.role
        }));

        this.user.emit({
          id: result.user.uid,
          email: this.loginForm.get('email')?.value,
          lastName: userData.lastName,
          firstName: userData.firstName,
          role: userData.role
        });

        this.SnackBar.open("Sikeres bejelentkezés!");
        this.authService.updateLoginStatus(true);
        localStorage.setItem('isLoggedIn', 'true');
        this.closeModal();
      })
      .catch((error) => {
        this.SnackBar.open("Sikertelen bejelentkezés!");
      })
  }

  closeLogin(): void {
    this.changeModal(EAuth.auth);
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
