import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
    destaque: Car[];
    carros: Car[];

    options: any;

    constructor(
        readonly route: ActivatedRoute
    ) {
        this.options = {
            loop: true,
            nav: false,
            dots: false,
            items: 1,
            autoplay: 10
        };

        this.route.data.subscribe(({ carros }) => {
            this.destaque = carros.destaque;
            this.carros = carros.carros;
        });
    }
}
