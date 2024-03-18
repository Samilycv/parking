import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  //register api function
  register(first_name:any,last_name:any,email:any,username:any,password:any,dob:any,
    gender:any,address:any,phone_number:any){
    const body={
      first_name,
      last_name,
      email,
      username,
      password,
      dob,
      gender,
      address,
      phone_number,
    }
    return this.http.post('http://127.0.0.1:8000/register/admin',body)
  }


  //login api function
  login(username: any, password: any) {
    const body = {
      username,
      password
    }
    return this.http.post('http://127.0.0.1:8000/token/', body)

  }
}
