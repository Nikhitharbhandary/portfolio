import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Viewprojects } from './viewprojects/viewprojects';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
    { path: "",  component : Home},
    { path : "products",component: Products},
    { path: "product-list", component : Viewprojects},
    { path:"login", component: Login },
    { path : 'register', component: Register},
    

];
