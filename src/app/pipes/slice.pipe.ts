import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value:string, count:number): unknown {
    return value.split(' ').slice(0,count).join(' ');
  }

}
