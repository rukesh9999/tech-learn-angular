import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOGIN, REGISTER } from './techlearn.const';

@Injectable({
  providedIn: 'root'
})
export class TechLearnServiceService {

  constructor(private httpClient: HttpClient) {

   }


   register(registerForm:any):Observable<any>
   {
      return this.httpClient.post(REGISTER,registerForm,{responseType: 'text' as 'json'});
   }


   login(loginForm:any):Observable<any>
   {
      return this.httpClient.post(LOGIN,loginForm);
   }
   
}
