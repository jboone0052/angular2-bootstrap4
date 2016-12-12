import {NgModule} from '@angular/core'; 
import {CommonModule} from '@angular/common'; 
import {FormsModule} from '@angular/forms'; 
import {RouterModule} from '@angular/router'; 

import {CategoryModule} from '../category/category.module'; 

import { ProductListComponent } from './product-list.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductCardComponent } from './product-card.component';
import { ProductGridComponent } from './product-grid.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, CategoryModule],
    exports: [],
    declarations: [ProductListComponent, ProductSearchComponent, ProductCardComponent, ProductGridComponent],
    providers: [ProductListComponent, ProductSearchComponent, ProductCardComponent, ProductGridComponent],
})
export class ProductModule { }
