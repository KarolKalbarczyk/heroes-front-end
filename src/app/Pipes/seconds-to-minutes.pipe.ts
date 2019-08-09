import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinutes'
})
export class SecondsToMinutesPipe implements PipeTransform {

  transform(value: number): any {
    const seconds = value % 60;
    const minutes = Math.floor(value / 60);
    if (value >= 60) {
    return `${minutes} : ${seconds}`;
    }
    return value;
  }

}
