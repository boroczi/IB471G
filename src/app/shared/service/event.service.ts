import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, collectionData, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { IEvent } from '../interface/event.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firestore: Firestore) { }

  async createEvent(event: Partial<IEvent>): Promise<void> {
    const userRef = doc(collection(this.firestore, 'events'));
    setDoc(userRef, event);
  }

  getEvents(): Observable<IEvent[]> {
    const eventsCollection = collection(this.firestore, 'events');
    return collectionData(eventsCollection, { idField: 'id' }) as Observable<IEvent[]>;
  }

  async deleteEvent(eventId: string): Promise<void> {
    const eventRef = doc(this.firestore, `events/${eventId}`);
    return deleteDoc(eventRef);
  }

  async updateEvent(eventId: string, updatedData: Partial<IEvent>): Promise<void> {
    const eventRef = doc(this.firestore, `events/${eventId}`);
    return updateDoc(eventRef, updatedData);
  }
}
