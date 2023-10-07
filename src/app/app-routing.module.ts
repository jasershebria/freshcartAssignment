import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProdutsComponent } from './components/products/produts.component';
import { authguardGuard } from './guards/authguard.guard';
import { BrandsComponent } from './components/brands/brands.component';
import { BranddetailsComponent } from './components/branddetails/branddetails.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SpecificcategoryComponent } from './components/specificcategory/specificcategory.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgtpasswordComponent } from './components/forgtpassword/forgtpassword.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full' },
  {path:"home", component:HomeComponent,canActivate:[authguardGuard]},
  {path:"cart", component:CartComponent,canActivate:[authguardGuard]},
  {path:"wishlist", component:WishlistComponent,canActivate:[authguardGuard]},
  {path:"products", component:ProdutsComponent,canActivate:[authguardGuard]},
  {path:"productdetails/:id", component:ProductdetailsComponent,canActivate:[authguardGuard]},
  {path:"categories", component:CategoriesComponent,canActivate:[authguardGuard]},
  {path:"specificcategory/:id", component:SpecificcategoryComponent,canActivate:[authguardGuard]},
  {path:"brands", component:BrandsComponent,canActivate:[authguardGuard]},
  {path:"branddetails/:id", component:BranddetailsComponent,canActivate:[authguardGuard]},
  {path:"checkout/:id", component:CheckoutComponent,canActivate:[authguardGuard]},
  {path:"allorders", component:AllordersComponent,canActivate:[authguardGuard]},
  {path:"forgetpassword", component:ForgtpasswordComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
