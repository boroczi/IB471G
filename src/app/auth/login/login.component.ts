import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton, MatIconButton} from '@angular/material/button';
import {SnackbarService} from '../../shared/service/snackbar.service';
import {IUser} from '../../shared/interface/user.interface';
import {MatIcon} from '@angular/material/icon';
import {EAuth} from '../../shared/enum/auth.enum';
import {user} from '../../shared/constant/user.const';

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
export class LoginComponent {
  loginForm: FormGroup;
  @Output() user: EventEmitter<Partial<IUser>> = new EventEmitter<Partial<IUser>>();
  @Input() changeModal!: (modal: EAuth) => void;

  constructor(private fb: FormBuilder, private SnackBar: SnackbarService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.get('username')?.value == "test" && this.loginForm.get('password')?.value == "test") {
      this.user.emit(user);
      this.SnackBar.open("Sikeres bejelentkezés");
    } else {
      this.SnackBar.open("Sikertelen bejelentkezés");
    }
  }

  closeLogin(): void {
    this.changeModal(EAuth.auth);
  }
}
