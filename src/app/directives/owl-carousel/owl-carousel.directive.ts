import { Directive, ElementRef, OnInit, Renderer2, Input, AfterContentInit } from '@angular/core';

declare const $;

@Directive({ selector: '[appOwlCarousel]' })
export class OwlCarouselDirective implements AfterContentInit {
    @Input() options: any = {};

    constructor(
        private readonly el: ElementRef,
        private readonly renderer: Renderer2
    ) {  }

    ngAfterContentInit(): void {
        this.renderer.addClass(this.el.nativeElement, 'owl-carousel');
        this.renderer.addClass(this.el.nativeElement, 'owl-theme');

        $(this.el.nativeElement).owlCarousel(this.options);
    }
}
