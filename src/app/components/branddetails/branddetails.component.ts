import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from 'src/app/services/BrandsService';
import{Brands} from 'src/app/interfaces/brands';

@Component({
  selector: 'app-branddetails',
  templateUrl: './branddetails.component.html',
  styleUrls: ['./branddetails.component.scss']
})
export class BranddetailsComponent implements OnInit {

  
  brandId:string = this._ActivatedRoute.snapshot.params['id'];
  brandDetails?:Brands ;

  constructor(private _BrandsService:BrandsService,private _ActivatedRoute:ActivatedRoute){
   
  }
  ngOnInit(): void {
    this.getSpecificProduct();
  }

  getSpecificProduct(){
    this._BrandsService.getSpecificBrand(this.brandId).subscribe((res)=>{
      console.log(res.data);
      this.brandDetails = res.data;
    })
  }

}
