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
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
/**
 * Modules
 */
var category_module_1 = require("./category/category.module");
var product_module_1 = require("./product/product.module");
/*
 * Components
 */
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var welcome_component_1 = require("./welcome/welcome.component");
var footer_component_1 = require("./footer/footer.component");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, category_module_1.CategoryModule, product_module_1.ProductModule, app_routes_1.routing, router_1.RouterModule],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, welcome_component_1.WelcomeComponent, footer_component_1.FooterComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map