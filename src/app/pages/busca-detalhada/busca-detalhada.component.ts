import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';
import { listOpcionais } from 'src/app/model/opcionais';

@Component({
    selector: 'app-busca-detalhada',
    templateUrl: './busca-detalhada.component.html',
    styleUrls: ['./busca-detalhada.component.scss']
})
export class BuscaDetalhadaComponent {
    carros: Car[];
    opcionais: string[];

    constructor(
        readonly route: ActivatedRoute
    ) {
        route.data.subscribe(({ carros }) => this.carros = carros);
        this.opcionais = listOpcionais;
    }
}
