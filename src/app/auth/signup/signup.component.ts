import { Component, Input, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SnackbarService } from '../../shared/service/snackbar.service';
import { EAuth } from '../../shared/enum/auth.enum';
import { AuthService } from '../../shared/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [
    MatCardModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    MatButton,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnDestroy {
  registerForm: FormGroup;
  @Input() changeModal!: (modal: EAuth) => void;
  @Input() closeModal!: () => void;
    private authSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private SnackBar: SnackbarService,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.SnackBar.open('A megadott adatok érvénytelenek!');
      return;
    }

    this.authService.signUp(
      this.registerForm.get('email')?.value,
      this.registerForm.get('password')?.value,
      this.registerForm.get('firstName')?.value,
      this.registerForm.get('lastName')?.value
    )
      .then((result) => {
        this.SnackBar.open("Sikeres regisztráció!");
        this.closeSignup();
      })
      .catch((error) => {
        this.SnackBar.open("Sikertelen regisztráció!");
      });
  }

  closeSignup(): void {
    this.changeModal(EAuth.auth);
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
