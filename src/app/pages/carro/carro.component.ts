import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-carro',
    templateUrl: './carro.component.html',
    styleUrls: ['./carro.component.scss']
})
export class CarroComponent {
    @ViewChild('anuncio')
    private readonly viewAnuncio: ElementRef;

    carro: Car;
    active = 0;

    constructor(
        readonly route: ActivatedRoute,
        private readonly sanitizer: DomSanitizer
    ) {
        this.route.data.subscribe(({ carro }) => this.carro = carro);
    }

    scroll() {
        (this.viewAnuncio.nativeElement as HTMLDivElement).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    prev() {
        if (this.active === 0) {
            this.active = this.carro.imagens.length - 1;
        } else {
            this.active = this.active--;
        }
    }

    next() {
        if (this.carro.imagens.length - 1 === this.active) {
            this.active = 0;
        } else {
            this.active = this.active++;
        }
    }

    getMessage() {
        return `Eu quero entrar em contato com você pelo carro ${ this.carro.marca } ${ this.carro.modelo }`;
    }

    getLink() {
        const phone = '+5511967872631';
        const link = `https://api.whatsapp.com/send?phone=${phone}&text=${this.getMessage()}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(link);
    }
}
