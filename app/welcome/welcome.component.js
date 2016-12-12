"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var category_1 = require("../category/category");
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        // Slide Categories
        this.slideCategories = [
            { id: '1', title: 'Bakery', imageS: 'http://placehold.it/1110x480', imageL: '', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
            { id: '2', title: 'Takeaway', imageS: 'http://placehold.it/1110x480', imageL: '', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
            { id: '3', title: 'Dairy', imageS: 'http://placehold.it/1110x480', imageL: '', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks, horses.' },
        ];
        // Card categories
        this.cardCategories = category_1.getCategories();
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent.prototype.selectCategory = function (category) {
        console.log('Selected category', category.title);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'db-welcome',
        templateUrl: 'welcome.component.html'
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map