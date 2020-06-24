import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Injectable()
export class BuscaDetalhadaResolverService implements Resolve<any> {
    filtros: {
        marca: string,
        anoDe: number,
        anoAte: number,
        precoDe: number;
        precoAte: number;
        cambio: string;
        carroceria: string;
        combustivel: string;
        cor: string;
        finalPlaca: number;
        opcionais: { [key: string]: boolean }
    };

    constructor(
        private readonly api: CarService
    ) {  }

    async resolve(route: ActivatedRouteSnapshot) {
        let carros = await this.api.getList().toPromise();

        if (this.filtros) {
            if (this.filtros.marca) {
                carros = carros.filter((carro) => carro.marca === this.filtros.marca);
            }

            if (this.filtros.cambio) {
                carros = carros.filter((carro) => carro.cambio === this.filtros.cambio);
            }

            if (this.filtros.carroceria) {
                carros = carros.filter((carro) => carro.carroceria === this.filtros.carroceria);
            }

            if (this.filtros.combustivel) {
                carros = carros.filter((carro) => carro.combustivel === this.filtros.combustivel);
            }

            if (this.filtros.cor) {
                carros = carros.filter((carro) => carro.cor === this.filtros.cor);
            }

            if (this.filtros.finalPlaca) {
                carros = carros.filter((carro) => carro.finalDaPlaca === this.filtros.finalPlaca);
            }

            if (this.filtros.precoDe) {
                carros = carros.filter((carro) => this.filtros.precoDe <= carro.preco);
            }

            if (this.filtros.precoAte) {
                carros = carros.filter((carro) => this.filtros.precoAte >= carro.preco);
            }

            if (this.filtros.anoDe) {
                carros = carros.filter((carro) => {
                    const anoDe = /(\d{4})\/\d{4}/.exec(carro.ano)[1];
                    return this.filtros.anoDe <= Number.parseInt(anoDe, 10);
                });
            }

            if (this.filtros.opcionais) {
                const opcionais = [];

                Object.keys(this.filtros.opcionais).forEach((key) => {
                    const item = this.filtros.opcionais[key];

                    if (item) {
                        opcionais.push(key);
                    }
                });

                const listaCarros = [];
                for (const carro of carros) {
                    const hasAllOpcionais = opcionais.reduce((res, opc) => {
                        if (!carro.opcionais.includes(opc)) {
                            return false;
                        }

                        return res;
                    }, true);

                    if (hasAllOpcionais) {
                        listaCarros.push(carro);
                    } else {
                        console.log('Negado para');
                        console.log(carro);
                    }
                }

                carros = listaCarros;
            }
        }

        return carros;
    }
}
