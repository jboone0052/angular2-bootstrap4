import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Category, getCategories} from './category';  

@Component({
    moduleId: module.id,
    selector: 'db-category-list',
    templateUrl: 'category-list.component.html'
})
export class CategoryListComponent implements OnInit {
    ngOnInit() { }

    categories: Category[] = getCategories(); 
 
    constructor(private router: Router) {} 
 
    filterProducts(category: Category) { 
        this.router.navigate(['/products'], {  
          queryParams: { category: category.id}  
        }); 
    } 
}