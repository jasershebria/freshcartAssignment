import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

   wishListItems:any[]=[];

   

  constructor(private _WishlistService:WishlistService,private _CartService:CartService,private _ToastrService:ToastrService){
   
 
  }

  ngOnInit(): void {
    this.getUserWishList();
    
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
        this.removeItemWishList(productId);
      }
    })
  }

  getUserWishList(){
    this._WishlistService.getLoggedUserWishList().subscribe({
      next:(res)=>{
       
        this.wishListItems = res.data;
        this._WishlistService.wishListCartNumber.next(res.count);
        console.log(this.wishListItems)
      },
      error:(err)=>{

      },
      complete:()=>{

      },
    });
  }

  removeItemWishList(itemId:string){
    this._WishlistService.removeItemFromWishlist(itemId).subscribe({
      next:(res)=>{
        
        this.getUserWishList();
        
      },
      error:(err)=>{
        this._ToastrService.error(err);
        
      },
      complete:()=>{
        this._ToastrService.success("Success item removed");
      }
    })
  }



}
