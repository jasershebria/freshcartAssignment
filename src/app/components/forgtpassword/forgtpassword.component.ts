import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ForgtpasswordService } from 'src/app/services/forgtpassword.service';

@Component({
  selector: 'app-forgtpassword',
  templateUrl: './forgtpassword.component.html',
  styleUrls: ['./forgtpassword.component.scss']
})
export class ForgtpasswordComponent {

  stepOne:boolean = true;
  stepTwo:boolean = false;
  stepThree:boolean = false;

  constructor(private _ForgtpasswordServiceL:ForgtpasswordService,
    private _AuthService:AuthService,
    private _Router:Router,
    private _ToastrService:ToastrService
    
    ){}

  forgetPassword = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required])
  });

  resetCode = new FormGroup({
    resetCode: new FormControl(null)
  });

  resetPassword = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    newPassword: new FormControl(null,[Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),Validators.required]),
  });




  forgetPasswordForm(data:FormGroup){
    this._ForgtpasswordServiceL.ForgotPassword(data.value).subscribe({
      next:(res)=>{
        console.log(res)

        if(res.statusMsg == 'success'){
         this.stepOne = false;
        this.stepTwo = true;
      }
    },
    error:(err)=>{
      this._ToastrService.error(err.err);
    }
  
  })
  }

  resetCodeForm(data:FormGroup){
    this._ForgtpasswordServiceL.VerifyResetCode(data.value).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.status === "Success"){
          this.stepTwo = false;
          this.stepThree = true;
        }
      },
      error:(err)=>{
        this._ToastrService.error(err.err);
      }
    })
  }

  resetPasswordForm(data:FormGroup){
    console.log(this.resetPassword.value)

    this._ForgtpasswordServiceL.ResetPassword(data.value).subscribe({
      next:(res)=>{
        this._ToastrService.success("email password succes changed");
        localStorage.setItem("userToken",res.token);
        this._AuthService.decodeToken();
        this._Router.navigate(['home']);
      },
      error:(err)=>{
        this._ToastrService.error(err.err);
      }
    })
  }


}
