import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'image' })
export class ImagePipe implements PipeTransform {
    constructor(
        private readonly sanalizer: DomSanitizer
    ) {  }

    transform(value: any) {
        return this.sanalizer.bypassSecurityTrustUrl(value);
    }
}
