import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any): any {
    const newsDate: any = new Date(value);
    const currentDate = Date.now();
    const timePassed = currentDate - newsDate;
    if (timePassed > 86400000) {
      return newsDate.toLocaleString({weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit'});
    } else {
      return newsDate.getHours() + `h ` + newsDate.getMinutes()+ `min `  + newsDate.getSeconds() + `sec` + ` ago`;
    }
  }

}
