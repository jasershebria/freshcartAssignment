import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggin: boolean = false;

  cartNumber: number = 0;

  wishListNumber: number = 0;



  flag = true;

  constructor(private _AuthService: AuthService,
    private _CartService: CartService,
    private _WishlistService: WishlistService,) {


  }


  ngOnInit(): void {

    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() !== null) {
          this.isLoggin = true;
          this.getCartNubmer();
          this.getWishListNumber();
        } else {
          this.isLoggin = false;
        }
      }
    });
  }

  getWishListNumber() {

    this._WishlistService.wishListCartNumber.subscribe({
      next: (val) => {

        this.wishListNumber = val;

      }
    });

  }

  getCartNubmer() {

    this._CartService.cartNumber.subscribe({
      next: (val) => {
        this.cartNumber = val;
      }
    });
  }


  logOut() {
    this._AuthService.logOut();
  }



}
