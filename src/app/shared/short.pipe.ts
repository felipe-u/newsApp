import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'short',
    standalone: true
})

export class ShortPipe implements PipeTransform {
    transform(value: string, inputType: number) {
        if (value.length > inputType) {
            return value.substring(0, inputType) + ' ...';
        }
        return value;
    }
}