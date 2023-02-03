import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './my-components/cart/cart.component';
import { HeaderComponent } from './my-components/header/header.component';
import { HomeComponent } from './my-components/home/home.component';
import { LandingComponent } from './my-components/landing/landing.component';
import { LoginComponent } from './my-components/login/login.component';
import { ProductsComponent } from './my-components/products/products.component';
import { SignUpComponent } from './my-components/sign-up/signUp.component';

const routes: Routes = [
  // {, component: LandingComponent},
  {path:'', pathMatch:'full', component: LoginComponent},
  // {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'sign-up', component: SignUpComponent},
  {path:'home', component: HomeComponent},
  {path:'cart', component: CartComponent},
  // {path:'header', component: HeaderComponent},
  {path:'products', component: ProductsComponent},
  {path:'landing', component: LandingComponent},
  {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }