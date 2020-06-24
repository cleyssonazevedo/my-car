import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { listOpcionais } from 'src/app/model/opcionais';
import { Filtros } from 'src/app/model/filtros';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { BuscaDetalhadaResolverService } from './busca-detalhada-resolver.service';

@Component({
    selector: 'app-busca-detalhada',
    templateUrl: './busca-detalhada.component.html',
    styleUrls: ['./busca-detalhada.component.scss']
})
export class BuscaDetalhadaComponent {
    carros: Car[];
    opcionais: string[];
    filtros: Filtros;

    group: FormGroup;
    groupOpcionais: { [key: string]: boolean };

    constructor(
        readonly route: ActivatedRoute,
        readonly builder: FormBuilder,
        private readonly detalhada: BuscaDetalhadaResolverService,
        private readonly router: Router
    ) {
        const year = moment().get('year');

        this.opcionais = listOpcionais;
        route.data.subscribe(({ carros, filtros }) => {
            this.carros = carros;
            this.filtros = filtros;
        });

        this.group = builder.group({
            marca: [null],
            anoDe: [null, [Validators.min(1900), Validators.max(year)]],
            anoAte: [null, [Validators.min(1900), Validators.max(year)]],

            precoDe: [null, [Validators.min(0)]],
            precoAte: [null, [Validators.min(0)]],

            cambio: [null],
            carroceria: [null],
            combustivel: [null],
            cor: [null],
            finalPlaca: [null, [Validators.min(0), Validators.max(9)]],
        });

        this.groupOpcionais = listOpcionais.reduce((group, opcional) => {
            group[opcional] = false;
            return group;
        }, {});
    }

    enviarDados() {
        console.log('Enviar dados', this.group);
        this.detalhada.filtros = Object.assign(this.group.value, {
            opcionais: this.groupOpcionais
        });

        this.router.navigate(['/busca']);
    }

    limparDados() {
        console.log('Limpar dados');
        this.group.reset();
        this.detalhada.filtros = null;
        this.router.navigate(['/busca'], {
            queryParams: null
        });
    }

    getControl(opcional) {
        console.log('Opcional', opcional);
        return this.groupOpcionais[opcional];
    }
}
