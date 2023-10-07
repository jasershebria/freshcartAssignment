import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {

  productId:string = this._ActivatedRoute.snapshot.params['id'];
  productDetails:any;

  constructor(
    private _ProductsService:ProductsService,
    private _ActivatedRoute:ActivatedRoute,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _WishlistService:WishlistService,
  
    ){
    this.getSpecificProduct();
  }

  getSpecificProduct(){
    this._ProductsService.getSpecificProduct(this.productId).subscribe((res)=>{
      console.log(res.data);
      this.productDetails = res.data;
    })
  }

  addToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message);
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

  mainSliderOptions: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true ,
    navSpeed: 700,
    margin:20,
    navText: ["brev","next"],
    items:1,
   
    nav: true,
  }

  
}
