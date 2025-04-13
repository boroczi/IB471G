import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {SnackbarService} from '../../shared/service/snackbar.service';
import {EAuth} from '../../shared/enum/auth.enum';

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
    MatIconButton
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  registerForm: FormGroup;
  @Input() changeModal!: (modal: EAuth) => void;

  constructor(private fb: FormBuilder, private SnackBar: SnackbarService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.SnackBar.open("Sikeres regisztráció");
    }
  }

  closeSignup(): void {
    this.changeModal(EAuth.auth);
  }
}
