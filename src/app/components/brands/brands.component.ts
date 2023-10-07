import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/BrandsService';
import{Brands} from 'src/app/interfaces/brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  allBrands:Brands[] =[]; 
  constructor(private _BrandsService:BrandsService){
    
  }

  ngOnInit(){
    this.getAllBrands();
  }

  getAllBrands(){
    this._BrandsService.getAllBrands().subscribe({
      next:(res)=>{
        console.log(res.data);
       this.allBrands = res.data;
      },
      error:(err)=>console.log(err)
    })
  }
}
