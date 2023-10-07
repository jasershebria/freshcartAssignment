import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  userHeaders:any = {
    token: localStorage.getItem('userToken')
  }

  

  wishListCartNumber = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { 

  if(true){
    this.getLoggedUserWishList().subscribe({
      next:(res)=>{
        this.wishListCartNumber.next(res.count);
      }
    })
  }

    console.log('hello ')
    
  }

  addToWishList(productId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      productId:productId
    })
  }

  removeItemFromWishlist(itemId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${itemId}`);
  }

  getLoggedUserWishList():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`);
  }


}
