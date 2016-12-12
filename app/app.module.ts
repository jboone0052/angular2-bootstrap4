import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Modules
 */
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
/*
 * Components
 */
import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';

import { routing } from './app.routes';

@NgModule({
  imports: [BrowserModule, CategoryModule, ProductModule, routing, RouterModule],
  declarations: [AppComponent, NavbarComponent, WelcomeComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
