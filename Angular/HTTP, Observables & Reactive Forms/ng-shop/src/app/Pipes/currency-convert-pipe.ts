import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvert',
})
export class CurrencyConvertPipe implements PipeTransform {
  transform(value: string | null, ...args: unknown[]): unknown {
    return value && Number((Number(value) * 85).toFixed(2));
  }
}
