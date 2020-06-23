import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CarService } from 'src/app/service/car.service';

@Injectable()
export class CarroResolverService implements Resolve<any> {
    constructor(
        private readonly api: CarService,
        private readonly router: Router
    ) {  }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.params.id;

        if (id) {
            return this.api.getCarById(Number.parseInt(id, 10));
        } else {
            this.router.navigate(['/']);
            return null;
        }
    }
}
