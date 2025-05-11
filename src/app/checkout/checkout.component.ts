import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CartItem } from '../shared/interface/cartitem.interface';
import {SnackbarService} from '../shared/service/snackbar.service';

@Component({
  selector: 'app-checkout',
  imports: [
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  protected cartItems: CartItem[] = [];

  constructor(private SnackBar: SnackbarService) {
  const cart = localStorage.getItem('cart');
  this.cartItems = cart ? Object.entries(JSON.parse(cart)).map(([id, item]: [string, any]) => ({
    id: id,
    name: item.name,
    price: item.price,
    quantity: item.quantity
  })) : [];
}

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateQuantity(item: CartItem, event: Event): void {
    const input = event.target as HTMLInputElement;
    const newQuantity = parseInt(input.value, 10);
    if (newQuantity > 0) {
      item.quantity = newQuantity;
    } else {
      item.quantity = 1;
    }
  }

  removeFromCart(item: CartItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  handlePurchase(): void {
    this.SnackBar.open("Sikeres vásárlás!");
    localStorage.removeItem('cart');
    this.cartItems = [];
  }
}
