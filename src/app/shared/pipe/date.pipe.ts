import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {

  transform(value: Date): string {
    if (!value) {
      return "A dátum nem elérhető!";
    }

    try {
      const year = value.getFullYear();
      const month = ('0' + (value.getMonth() + 1)).slice(-2);
      const day = ('0' + value.getDate()).slice(-2);
      const hours = ('0' + value.getHours()).slice(-2);
      const minutes = ('0' + value.getMinutes()).slice(-2);

      return `${year}.${month}.${day}. ${hours}:${minutes}`;
    } catch (e) {
      return "A dátum nem elérhető!";
    }
  }

}
