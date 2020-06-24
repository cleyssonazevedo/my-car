import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuscaDetalhadaComponent } from './busca-detalhada.component';
import { BuscaDetalhadaResolverService } from './busca-detalhada-resolver.service';
import { FiltrosResolverService } from './filtros-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: BuscaDetalhadaComponent,
                runGuardsAndResolvers: 'always',
                resolve: {
                    carros: BuscaDetalhadaResolverService,
                    filtros: FiltrosResolverService
                }
            }
        ])
    ],
    declarations: [ BuscaDetalhadaComponent ],
    providers: [
        BuscaDetalhadaResolverService,
        FiltrosResolverService
    ]
})
export class BuscaDetalhadaModule {  }
