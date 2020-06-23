import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';

@Component({
    selector: 'app-carro',
    templateUrl: './carro.component.html',
    styleUrls: ['./carro.component.scss']
})
export class CarroComponent {
    @ViewChild('anuncio')
    private readonly viewAnuncio: ElementRef;
    options: any;

    carro: Car;

    constructor(
        readonly route: ActivatedRoute
    ) {
        this.options = {
            loop: true,
            nav: false,
            dots: false,
            items: 1
        };

        this.route.data.subscribe(({ carro }) => this.carro = carro);
    }

    scroll() {
        (this.viewAnuncio.nativeElement as HTMLDivElement).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
