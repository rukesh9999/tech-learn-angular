import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CHANGE_PASSWORD, FORGOT_PASSWORD, LOGIN, REGISTER, VERIFY_USER_EXISTS_OR_NOT } from './techlearn.const';

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


   verifyUserExistsORNot(username:string)
   {
       return this.httpClient.get(VERIFY_USER_EXISTS_OR_NOT+'/'+username,{responseType: 'text' as 'json'});
   }

   
   forgotpassword(email:string){
      console.log('email....'+email);
      
       return this.httpClient.get(FORGOT_PASSWORD+'/'+email,{responseType: 'text' as 'json'});
   }


   changepassword(updatedpassword:string)
   {
      return this.httpClient.get(CHANGE_PASSWORD+'/'+updatedpassword)
   }
   
}
