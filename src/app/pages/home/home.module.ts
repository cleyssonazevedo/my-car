import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { OwlCarouselModule } from 'src/app/directives';
import { ImageModule } from 'src/app/pipe';

@NgModule({
    imports: [
        CommonModule,
        OwlCarouselModule,
        ImageModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ])
    ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ]
})
export class HomeModule {  }
