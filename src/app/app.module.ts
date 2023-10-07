import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SlicePipe } from './pipes/slice.pipe';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProdutsComponent } from './components/products/produts.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BranddetailsComponent } from './components/branddetails/branddetails.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SpecificcategoryComponent } from './components/specificcategory/specificcategory.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AddHeaderInterceptor } from './Interceptors/add-header.interceptor';
import { LoadingInterceptor } from './Interceptors/loading.interceptor';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgtpasswordComponent } from './components/forgtpassword/forgtpassword.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    HomeComponent,
    SlicePipe,
    ProductdetailsComponent,
    ProdutsComponent,
    BrandsComponent,
    BranddetailsComponent,
    CategoriesComponent,
    SpecificcategoryComponent,
    FooterComponent,
    CartComponent,
    WishlistComponent,
    LoadingComponent,
    CheckoutComponent,
    AllordersComponent,
    ForgtpasswordComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AddHeaderInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
