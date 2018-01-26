import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  // Returns an random integer number between 0 and the value passed.
  transform(value: number): number {
    return Math.floor(Math.random() * value + 1);
  }

}
