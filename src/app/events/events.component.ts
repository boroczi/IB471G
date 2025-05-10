import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '../shared/pipe/date.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFabButton} from '@angular/material/button';
import {SnackbarService} from '../shared/service/snackbar.service';
import { EventService } from '../shared/service/event.service';
import { IEvent } from '../shared/interface/event.interface';

@Component({
  selector: 'app-events',
    imports: [
        MatCardModule,
        MatTableModule,
        MatIconModule,
        DatePipe,
        MatExpansionModule,
        MatFabButton
    ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  protected readonly DatePipe = DatePipe;
  events: IEvent[] = [];

  constructor(private SnackBar: SnackbarService, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  addToCart(id: string, name: string, price: number) {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      const cart = localStorage.getItem('cart');

      if (cart) {
        const cartObject = JSON.parse(cart);

        if (cartObject[id]?.quantity) {
          cartObject[id].quantity++;
        } else {
          cartObject[id] = { name, price, quantity: 1 };
        }
        localStorage.setItem('cart', JSON.stringify(cartObject));
        console.log(this.localStorage.getItem('cart'));
      } else {
        const newCart: { [key: string]: { name: string; price: number; quantity: number } } = {};
        newCart[id] = { name, price, quantity: 1 };
        localStorage.setItem('cart', JSON.stringify(newCart));
        console.log(this.localStorage.getItem('cart'));
      }
    } else {
      this.SnackBar.open("Kérlek jelentkezz be a vásárláshoz");
    }
  }

  nuhuh() {
    this.SnackBar.open("¯\\_( ͡° ͜ʖ ͡°)_/¯");
  }

  protected readonly localStorage = localStorage;
}
