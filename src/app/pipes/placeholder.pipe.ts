import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'placeHolder'
})

export class PlaceHoderPipe implements PipeTransform {
    transform(value: string, defecto: string): string {
        return (value) ? value : defecto;
    }
}