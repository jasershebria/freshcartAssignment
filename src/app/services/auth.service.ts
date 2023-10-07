import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable,BehaviorSubject} from 'rxjs';
import { FormGroup } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private _HttpClient:HttpClient, private _Router:Router) { 
    if(localStorage.getItem('userToken') !== null){
      this.decodeToken();
     

    }
    
  }

  userData = new BehaviorSubject(null);

  

  decodeToken(){
    let userToken:any = JSON.stringify(localStorage.getItem('userToken'));
    let decodeToken:any = jwtDecode(userToken);
    this.userData.next(decodeToken);
  }

  register(regisData:FormGroup):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,regisData.value);
  }

  login(loginData:FormGroup):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,loginData.value);
   
  }

  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['login']);
  }

  

}
