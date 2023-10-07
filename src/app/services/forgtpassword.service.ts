import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgtpasswordService {

  constructor(private _HttpClient:HttpClient) { }

  ForgotPassword(data:FormGroup):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,data)
  }

  VerifyResetCode(data:FormGroup):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,data)
  }

  ResetPassword(data:FormGroup):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,data)
  }

  



 
}
