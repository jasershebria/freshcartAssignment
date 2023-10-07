import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Brands} from 'src/app/interfaces/brands';



@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllBrands(): Observable<Brands|any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }

  getSpecificBrand(id: string): Observable<Brands|any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
  }
}
