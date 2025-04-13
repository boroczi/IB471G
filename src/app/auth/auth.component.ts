import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {EAuth} from '../shared/enum/auth.enum';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-auth',
  imports: [
    MatCard,
    MatCardContent,
    MatFabButton,
    MatCardHeader,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  @Output() modal: EventEmitter<EAuth> = new EventEmitter<EAuth>();
  @Input() closeModal!: () => void;

  changeModal(modal: EAuth): void {
    this.modal.emit(modal);
  }

  close(): void {
    this.closeModal();
  }

  protected readonly EAuth = EAuth;
}

