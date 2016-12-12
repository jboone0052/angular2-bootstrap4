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
/*
 * Angular Imports
 */
var core_1 = require("@angular/core");
var NavbarComponent = (function () {
    function NavbarComponent() {
        // App name
        this.appName = 'Dream Bean';
        // Navgation items
        this.navItems = [
            { href: '#', label: 'Home', active: true },
            { href: '#', label: 'Products', active: false },
            { href: '#', label: 'Checkout', active: false },
            { href: '#', label: 'Sign out', active: false }
        ];
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'db-navbar',
        templateUrl: 'app/navbar/navbar.component.html'
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map