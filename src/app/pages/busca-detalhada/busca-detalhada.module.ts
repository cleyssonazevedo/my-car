import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuscaDetalhadaComponent } from './busca-detalhada.component';
import { BuscaDetalhadaResolverService } from './busca-detalhada-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: BuscaDetalhadaComponent,
                runGuardsAndResolvers: 'always',
                resolve: {
                    carros: BuscaDetalhadaResolverService
                }
            }
        ])
    ],
    declarations: [ BuscaDetalhadaComponent ],
    providers: [ BuscaDetalhadaResolverService ]
})
export class BuscaDetalhadaModule {  }
