import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { OwlCarouselModule } from 'src/app/directives';
import { ImageModule, BackgroundImageModule } from 'src/app/pipe';
import { HomeResolverService } from './home-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        OwlCarouselModule,
        BackgroundImageModule,
        ImageModule,
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
