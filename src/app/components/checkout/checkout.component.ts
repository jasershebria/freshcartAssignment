import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

   carId:string = this._ActivatedRoute.snapshot.params['id'];

  constructor(private _CartService:CartService, private _ActivatedRoute:ActivatedRoute){
    // console.log(this.carId)
  }

  checkoutForm = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null),
  });

  navigateUrl(url:string){
    window.location.href = url;
  }


  checkOut(data:FormGroup){
    this._CartService.onLinePayment(this.carId,data.value).subscribe({
      next:(res)=>{
        console.log("jaser",res);
        this.navigateUrl(res.session.url);
        
      }
    })
  }

}
