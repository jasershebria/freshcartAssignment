import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-produts',
  templateUrl: './products.component.html',
  styleUrls: ['./produts.component.scss']
})
export class ProdutsComponent {
  allProducts:Product[]=[]; 
  constructor(private _ProductsService:ProductsService,
    private _WishlistService:WishlistService,
    private _ToastrService:ToastrService,
    private _CartService:CartService
    
    ){}


  ngOnInit(): void {
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
}
