import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'uppercase'
})
export class UpperCasePipe implements PipeTransform {
    transform( value: string ): string {
        return value.toUpperCase();
    }
}
