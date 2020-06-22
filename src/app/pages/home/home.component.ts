import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
    options: any;

    constructor() {
        this.options = {
            loop: true,
            nav: false,
            dots: false,
            items: 1
        };
    }
}
