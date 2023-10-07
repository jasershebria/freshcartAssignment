import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  allProducts:Product[]=[]; 
  allCategories:any[]=[];
  
  constructor(private _ProductsService:ProductsService,
     private _CartService:CartService,
     private _CategoriesService:CategoriesService,
     private _ToastrService:ToastrService,
     private _WishlistService:WishlistService
     ){}


  ngOnInit(): void {
    
    this.getAllProduct();

    this.getAllCategories();

   
  }

  getAllProduct(){
    this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.allProducts = res.data;
        console.log(this.allProducts);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        
      }
    });
  }

  addToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message);
        this._CartService.cartNumber.next(res.numOfCartItems);
      },
      error:(err)=>{
        this._ToastrService.error(err.message);
      },
      complete:()=>{
        
      }
    })
  }

  addToWishlist(productId:string){
    this._WishlistService.addToWishList(productId).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message);
        console.log(res);
        this._WishlistService.wishListCartNumber.next(res.data.length);
      },
      error:(err)=>{
        this._ToastrService.error(err.message);
      },
      complete:()=>{
        
      }
    })
  }

  getAllCategories(){
    this._CategoriesService.getAllCategories().subscribe({
      next:(res)=> this.allCategories = res.data,
      error: (err) => console.log(err),
      complete: ()=> console.log('success')
    })
  }

  mainSliderOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true ,
    navSpeed: 700,
    margin:20,
    navText: [],
    items:1,
   
    nav: false,
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true ,
    navSpeed: 700,
    margin:20,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false,
  }

  

}
