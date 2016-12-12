import { Component, OnInit } from '@angular/core';

import {Product, getProducts} from './product.model'; 

@Component({
    moduleId: module.id,
    selector: 'db-product-grid',
    templateUrl: 'product-grid.component.html'
})
export class ProductGridComponent implements OnInit {

    ngOnInit() { }

    products: any = []; 
 
    constructor() { 
        let index = 0; 
        let products: Product[] = getProducts(); 
        let length = products.length; 
 
        this.products = []; 
 
        while (length) { 
            let row: Product[] = []; 
            if (length >= 3) { 
                for (let i = 0; i < 3; i++) { 
                    row.push(products[index++]); 
                } 
                this.products.push(row); 
                length -= 3; 
            } else { 
                for (; length > 0; length--) { 
                    row.push(products[index++]); 
                } 
                this.products.push(row); 
            } 
        } 
    } 

    
}