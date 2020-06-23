import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'background' })
export class BackgroundImagePipe implements PipeTransform {
    transform(value: any) {
        return `url(${value})`;
    }
}
