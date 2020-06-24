import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Injectable()
export class BuscaDetalhadaResolverService implements Resolve<any> {
    constructor(
        private readonly api: CarService
    ) {  }

    resolve(route: ActivatedRouteSnapshot) {
        return this.api.getList();
    }
}
