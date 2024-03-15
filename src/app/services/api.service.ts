import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //register api function
  register(name:any,mobileno:any,vehicleno:any,password:any,confirmpassword:any){
    const body={
      name,
      mobileno,
      vehicleno,
      password,
      confirmpassword
    }
    return this.http.post('http://127.0.0.1:8000/register/user',body)
  }
}
