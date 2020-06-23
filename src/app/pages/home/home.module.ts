import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { OwlCarouselModule } from 'src/app/directives';
import { ImageModule } from 'src/app/pipe';
import { HomeResolverService } from './home-resolver.service';
import { BackgroundImageModule } from 'src/app/pipe/background-image/background-image.module';

@NgModule({
    imports: [
        CommonModule,
        OwlCarouselModule,
        ImageModule,
        BackgroundImageModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
                runGuardsAndResolvers: 'always',
                resolve: {
                    carros: HomeResolverService
                }
            }
        ])
    ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    providers: [ HomeResolverService ]
})
export class HomeModule {  }
