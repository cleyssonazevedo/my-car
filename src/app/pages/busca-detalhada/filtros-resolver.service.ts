import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CarService } from 'src/app/service/car.service';
import { Filtros } from 'src/app/model/filtros';

@Injectable()
export class FiltrosResolverService implements Resolve<any> {
    constructor(
        private readonly api: CarService
    ) {  }

    async resolve(route: ActivatedRouteSnapshot) {
        const carros = await this.api.getList().toPromise();
        const filtros = new Filtros();

        carros.forEach((item) => {
            const { marcas, cambios, carrocerias, combustiveis, cores } = filtros;

            if (!marcas.includes(item.marca)) {
                marcas.push(item.marca);
            }

            if (!cambios.includes(item.cambio)) {
                cambios.push(item.cambio);
            }

            if (!carrocerias.includes(item.carroceria)) {
                carrocerias.push(item.carroceria);
            }

            if (!combustiveis.includes(item.combustivel)) {
                combustiveis.push(item.combustivel);
            }

            if (!cores.includes(item.cor)) {
                cores.push(item.cor);
            }
        });


        filtros.cambios = filtros.cambios.sort((a, b) => a.localeCompare(b));
        filtros.carrocerias = filtros.carrocerias.sort((a, b) => a.localeCompare(b));
        filtros.combustiveis = filtros.combustiveis.sort((a, b) => a.localeCompare(b));
        filtros.cores = filtros.cores.sort((a, b) => a.localeCompare(b));
        filtros.marcas = filtros.marcas.sort((a, b) => a.localeCompare(b));

        return filtros;
    }
}


