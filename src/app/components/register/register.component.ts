import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService: AuthService) { }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, {
    validators: this.passwordMatching
  }
  );

  passwordMatching(registerForm: any) {
    let pass = registerForm.get('password');
    let rePass = registerForm.get('rePassword');

    if (pass?.value === rePass?.value) {
      return null;
    } else {
      rePass?.setErrors({ repasserr: "password and rePassword NotMatching" });
      return { repasserr: "password and rePassword NotMatching" };
    }
  }

  registerFormMethod() {
    this._AuthService.register(this.registerForm).subscribe((res) => {
      console.log(res.message);
    });
  }

}
