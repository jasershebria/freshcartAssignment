import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent {
  private userid: any;

  public userOrders:any[]=[];

  constructor(
    private _OrdersService: OrdersService,
    private _AuthService: AuthService,

  ) {
    this.getAllOrders();

  }

  getAllOrders() {
    this.userid = this._AuthService.userData.getValue();

    this._OrdersService.getAllOrders(this.userid.id).subscribe({
      next: (res) => {
        this.userOrders = res;
        console.log(this.userOrders)
      }
    })
  }
}
