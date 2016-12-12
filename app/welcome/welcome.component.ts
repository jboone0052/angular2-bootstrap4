import { Component, OnInit } from '@angular/core';

import {Category, getCategories} from '../category/category';

@Component({
    moduleId: module.id,
    selector: 'db-welcome',
    templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
     // Slide Categories
  slideCategories: Category[] = [
    { id: '1', title: 'Bakery', imageS: 'http://placehold.it/1110x480', imageL: '', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
    { id: '2', title: 'Takeaway', imageS: 'http://placehold.it/1110x480',imageL: '', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
    { id: '3', title: 'Dairy', imageS: 'http://placehold.it/1110x480', imageL: '',desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks, horses.' },
  ];

  // Card categories
  cardCategories: Category[] = getCategories();

  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }
}