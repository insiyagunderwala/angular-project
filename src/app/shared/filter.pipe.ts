import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], fname: string, propName: string): any[] {
    const result: any = [];
    if(!value || fname === '' || propName === ''){
      return value;
    }
    value.forEach((a:any) => {
      if(a[propName].trim().toLowerCase().includes(fname.toLowerCase())){
        result.push(a);
      }

    })
    return result;
  }

}
