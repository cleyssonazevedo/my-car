import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlCarouselDirective } from './owl-carousel.directive';

@NgModule({
    declarations: [ OwlCarouselDirective ],
    exports: [ OwlCarouselDirective ]
})
export class OwlCarouselModule {  }
