import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AddproductsComponent } from './addproducts/addproducts.component';



const routes: Routes = [
  {
  path:'login',
  component:LoginComponent
   },
   {
    path:'checkout',
    component:FormComponent
   },
  {  
  path:"",
  component:LoginComponent 
 },
{
  path:'user',
  component:NavbarComponent,
  children:[
    {
      path:'products',
      component:ProductsComponent
    },
    
    {
      path:'cart',
      component:CartComponent
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'addproducts',
      component:AddproductsComponent
    }
  ]
}

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
