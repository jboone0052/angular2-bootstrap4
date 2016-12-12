import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'db-search',
    templateUrl: 'product-search.component.html'
})
export class ProductSearchComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    searchProduct(value: string) { 
        this.router.navigate(['/products'],
 
          { queryParams: { search: value} }); 
    } 
}