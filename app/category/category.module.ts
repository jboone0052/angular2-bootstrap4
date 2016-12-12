import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryCardComponent } from './category-card.component';
import { CategorySlideComponent } from './category-slide.component';
import { CategoryListComponent } from './category-list.component';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [CategoryCardComponent, CategorySlideComponent, CategoryListComponent],
    exports: [CategoryCardComponent, CategorySlideComponent, CategoryListComponent]
})
export class CategoryModule { }