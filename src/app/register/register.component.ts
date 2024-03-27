import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterError: string = '';
  RegisterSuccess: string = '';
 

  constructor(private fb: FormBuilder, private api: ApiService,private loginRouter:Router) { }

  registerForm = this.fb.group({//formGroup
    first_name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],//formArray
    last_name: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    email: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    username: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    dob: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    gender: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    address: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    phone_number: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })
  

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      let first_name = this.registerForm.value.first_name
      let last_name = this.registerForm.value.last_name
      let email = this.registerForm.value.email
      let username = this.registerForm.value.username
      let password = this.registerForm.value.password
      let dob = this.registerForm.value.dob
      let gender = this.registerForm.value.gender
      let address = this.registerForm.value.address
      let phone_number = this.registerForm.value.phone_number
      console.log(first_name,last_name,email,username,password,dob,gender,address,phone_number);

      //api call to register
      this.api.register(first_name, last_name, email, username, password, dob, gender, address, phone_number).subscribe((response: any) => {
      console.log(response);
        alert("Register Successfully");//success
        this.RegisterSuccess=response.alert;
         setTimeout(() => {
          //redirect to login page
          this.loginRouter.navigateByUrl('/login')
        }, 3000)
      },
      (response: any) => {
        this.RegisterError = response.error.alert('username already exist')//error message
        setTimeout(() => {
          this.registerForm.reset();
          this.RegisterError = '';
        }, 2000);
      }
    )
  }
  else {
    alert('Invalid form')
  }
}
}
