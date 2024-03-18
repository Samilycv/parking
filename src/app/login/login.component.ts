import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginSuccess: boolean = false;
  loginError: string = '';
  constructor(private fb: FormBuilder, private api: ApiService, private loginRouter: Router) { }
  ngOnInit(): void {

  }
  loginForm = this.fb.group({//formGroup
    username: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })

  //form control passed to html form

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let username = this.loginForm.value.username
      let password = this.loginForm.value.password
      this.api.login(username, password).subscribe((response: any) => {
        alert('Login successful')
        this.loginRouter.navigateByUrl('/location')
      })
      
    }
    else{
      alert('Invalid login form')
    }
  }
    }


