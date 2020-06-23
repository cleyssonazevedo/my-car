import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { OwlCarouselModule } from 'src/app/directives';
import { ImageModule } from 'src/app/pipe';
import { HomeResolverService } from './home-resolver.service';
import { BackgroundImageModule } from 'src/app/pipe/background-image/background-image.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        OwlCarouselModule,
        ImageModule,
        BackgroundImageModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
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
