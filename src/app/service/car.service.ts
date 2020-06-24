import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, reduce, map, find } from 'rxjs/operators';
import { from } from 'rxjs';
import { Car } from '../model/car';

@Injectable()
export class CarService {
    constructor(
        private readonly http: HttpClient
    ) { }

    getListCars() {
        return this.http.get<Car[]>('/assets/carros.json')
            .pipe(
                switchMap((value) =>
                    from(value)
                        .pipe(
                            reduce((carros, item) => {
                                item.favoritar = localStorage.getItem(`${item.marca}&${item.modelo}-${item.id}`) === '0';

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

    getCarById(id: number) {
        return this.http.get<Car[]>('/assets/carros.json')
            .pipe(
                switchMap((carros) =>
                    from(carros)
                        .pipe(find((carro) => carro.id === id))
                )
            );
    }
}
