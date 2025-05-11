import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  setDoc,
  collectionData,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { IEvent } from '../interface/event.interface';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  async createEvent(event: Partial<IEvent>): Promise<void> {
    const isAdmin = await this.authService.validateAdmin();
    if (isAdmin) {
      const userRef = doc(collection(this.firestore, 'events'));
      setDoc(userRef, event);
    }
    return Promise.resolve();
  }

  getEvents(): Observable<IEvent[]> {
    const eventsCollection = collection(this.firestore, 'events');
    return collectionData(eventsCollection, { idField: 'id' }) as Observable<
      IEvent[]
    >;
  }

  async deleteEvent(eventId: string): Promise<void> {
    const isAdmin = await this.authService.validateAdmin();
    if (isAdmin) {
      const eventRef = doc(this.firestore, `events/${eventId}`);
      return deleteDoc(eventRef);
    }
    return Promise.resolve();
  }

  async updateEvent(
    eventId: string,
    updatedData: Partial<IEvent>
  ): Promise<void> {
    const isAdmin = await this.authService.validateAdmin();
    if (isAdmin) {
      const eventRef = doc(this.firestore, `events/${eventId}`);
      return updateDoc(eventRef, updatedData);
    }
    return Promise.resolve();
  }
}
