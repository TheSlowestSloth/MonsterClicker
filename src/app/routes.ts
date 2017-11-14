import {Routes} from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ShopComponent } from './components/shop.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
]