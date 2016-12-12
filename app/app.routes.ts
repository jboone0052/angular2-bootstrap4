import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent} from './product/product-list.component';
const routes: Routes = [   
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },   
    { path: 'welcome', component: WelcomeComponent },   
    { path: 'products', component: ProductListComponent },   
    //{ path: 'products/:id', component: ProductComponent } 
]; 

export const routing = RouterModule.forRoot(routes);