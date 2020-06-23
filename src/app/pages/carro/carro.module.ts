import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarroComponent } from './carro.component';
import { OwlCarouselModule } from 'src/app/directives';
import { BackgroundImageModule } from 'src/app/pipe/background-image/background-image.module';
import { CarroResolverService } from './carro-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        OwlCarouselModule,
        BackgroundImageModule,
        RouterModule.forChild([
            {
                path: '',
                component: CarroComponent,
                resolve: {
                    carro: CarroResolverService
                }
            }
        ])
    ],
    declarations: [ CarroComponent ],
    exports: [ CarroComponent ],
    providers: [ CarroResolverService ]
})
export class CarroModule {  }
