import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, reduce, toArray, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { Car } from '../model/car';

@Injectable()
export class CarService {
    constructor(
        private readonly http: HttpClient
    ) {  }

    getListCars() {
        return this.http.get<Car[]>('/assets/carros.json')
            .pipe(
                switchMap((value) =>
                    from(value)
                        .pipe(
                            reduce((carros, item) => {
                                if (item.destaque) {
                                    carros.destaque.push(item);
                                }

                                carros.carros.push(item);
                                return carros;
                            }, { destaque: [] as Car[], carros: [] as Car[] }),
                            map((carros) => {
                                carros.destaque = carros.destaque
                                    .sort((a, b) => a.destaque - b.destaque);

                                return carros;
                            })
                        )
                )
            );
    }
}
