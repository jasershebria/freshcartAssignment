import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carDetails:any;

  constructor(private _CartService:CartService,private _ToastrService:ToastrService){

  }

  ngOnInit(): void {
    this.getLoggedUserCart();
  }

  getLoggedUserCart(){
    this._CartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.carDetails = res.data;
        
        console.log("eeekas",res.data);
      },
      error: (err)=>{}
    })
  }

  removeCardItem(carditemId:string){
    this._CartService.removeCartItem(carditemId).subscribe({
      next:(res)=>{
       this.getLoggedUserCart();
        this._CartService.cartNumber.next(res.numOfCartItems);
      },
      error:(err)=>{
        this._ToastrService.error("Success item removed");
        console.log(err)
      },
      complete:()=>{
        this._ToastrService.success("Success item removed");
        console.log("Success item removed")
      }
    })
  }

  updateCartProduct(carditemId:string,itemCount:number){
    this._CartService.updateCartProduct(carditemId,itemCount).subscribe({
      next:(res)=>{
        this.carDetails = res.data;
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("updated item sucess")
        this._ToastrService.success("updated item sucess");
      }
    })
  }

  clearCart(){
    this._CartService.clearCart().subscribe({
      next:(res)=>{
        if(res.message == "success"){
          this. carDetails = null;
        }
        
      },
      error:(err)=>{
        this._ToastrService.error(err);
      },
      complete:()=>{
        this._ToastrService.success("Success cart cleared");
      }
    })
  }



}
