import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class SnackbarService {
  constructor(private snackbar: MatSnackBar) { }

  open(message: string, duration: number = 3000): void {
    this.snackbar.open(message, '', {
      duration: duration,
      panelClass: ['snackbar']
    });
  }
}
