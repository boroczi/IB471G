import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: Timestamp | Date): string {
    if (!value) {
      return 'A dátum nem elérhető!';
    }

    let date: Date;
    if (value instanceof Timestamp) {
      date = value.toDate();
    } else {
      date = value;
    }

    try {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const hours = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);

      return `${year}.${month}.${day}. ${hours}:${minutes}`;
    } catch (e) {
      return 'A dátum nem elérhető!';
    }
  }
}
