import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
    @ViewChild('anuncios')
    private readonly viewAnuncios: ElementRef;

    destaque: Car[];
    carros: Car[];
    originalCarros: Car[];

    options: any;

    pesquisa = new FormControl(null);

    constructor(
        readonly route: ActivatedRoute
    ) {
        this.options = {
            loop: true,
            nav: false,
            dots: false,
            items: 1,
            // autoplay: 10
        };

        this.route.data.subscribe(({ carros }) => {
            this.destaque = carros.destaque;

            this.carros = carros.carros;
            this.originalCarros = [...carros.carros];
        });

        this.pesquisa.valueChanges.subscribe(() => this.filtro());
    }

    scroll() {
        (this.viewAnuncios.nativeElement as HTMLDivElement).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    favoritar(car: Car) {
        car.favoritar = !car.favoritar;
        localStorage.setItem(`${car.nome}-${car.id}`, car.favoritar ? '0' : '1');
    }

    filtro() {
        if (this.pesquisa.value) {
            const data = this.originalCarros
                .filter((item) => new RegExp(this.pesquisa.value, 'i').test(item.nome));
            console.log(data);
            this.carros = data;
        } else {
            this.carros = this.originalCarros;
        }
    }
}
