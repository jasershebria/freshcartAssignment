import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartNumber = new BehaviorSubject(0);


  constructor(private _HttpClient: HttpClient) {


    this.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartNumber.next(res.numOfCartItems);
      }
    })

  }

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: productId
      });
  }

  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`);
  }

  removeCartItem(cartitemId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${cartitemId}`);
  }

  updateCartProduct(cartitemId: string, itemCount: number): Observable<any> {

    if (itemCount == 0) {
      return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${cartitemId}`);

    } else {
      return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${cartitemId}`,
        {
          count: itemCount
        });
    }
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`);
  }

  onLinePayment(cartId: string, data: FormGroup): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`, { shippingAddress: data })
  }

}
