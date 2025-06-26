import { Routes } from '@angular/router';
import { MDFLogin } from './Components/Form/mdf-login/mdf-login';
import { TDFRegister } from './Components/Form/tdf-register/tdf-register';
import { DirectiveTwo } from './Components/directive-two/directive-two';
import { Assignments } from './Components/assignments/assignments';
import { NotFound } from './Components/not-found/not-found';
import { AllProduct } from './Components/all-product/all-product';
import { Directives } from './Components/directives/directives';
import { AssignmentService } from './Components/assignment-service/assignment-service';
import { AllProductFromDB } from './Components/all-product-from-db/all-product-from-db';


export const routes: Routes = [
    {
        path:'login',
        component:MDFLogin
    },
    {
        path:'Register',
        component:TDFRegister
    },
    {
        path: 'directive-two',
        component: DirectiveTwo
    },
    {
        path:'assignments',
        component: Assignments
    },
    {
        path:'allProduct',
        component:AllProduct
    },
    {
        path: 'directives',
        component: Directives
    },
    {       
        path:'assignment-service',
        component:AssignmentService   
    },
     {
        path: 'productDB',
        component: AllProductFromDB, // Redirect to login page by default
    },
    // Wildcard route for a 404 page
    {
        path: '**',
        component: NotFound // Redirect to login or a 404 component
    }
   
    
];
