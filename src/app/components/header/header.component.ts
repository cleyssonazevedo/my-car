import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
    search: string;

    constructor(
        private readonly router: Router,
        readonly route: ActivatedRoute
    ) {
        route.queryParams.subscribe(
            (query) => {
                if (query.search) {
                    this.search = this.search;
                } else {
                    this.search = null;
                }
            }
        );
    }

    searchData() {
        this.router.navigate(['/'], {
            queryParams: { search: this.search }
        });
    }
}
