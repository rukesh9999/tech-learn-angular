import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CHANGE_PASSWORD, DASHBOARD_COUNT, FORGOT_PASSWORD, LOGIN, REGISTER, TECH_SAVE, VERIFY_USER_EXISTS_OR_NOT } from './techlearn.const';

@Injectable({
  providedIn: 'root'
})
export class TechLearnServiceService {

  constructor(private _httpclient: HttpClient) {

   }


   register(registerForm:any):Observable<any>
   {
      return this._httpclient.post(REGISTER,registerForm,{responseType: 'text' as 'json'});
   }


   login(loginForm:any):Observable<any>
   {
      return this._httpclient.post(LOGIN,loginForm);
   }


   verifyUserExistsORNot(username:string)
   {
       return this._httpclient.get(VERIFY_USER_EXISTS_OR_NOT+'/'+username,{responseType: 'text' as 'json'});
   }

   
   forgotpassword(email:string){      
       return this._httpclient.get(FORGOT_PASSWORD+'/'+email,{responseType: 'text' as 'json'});
   }


   changepassword(updatedpassword:string,token:string)
   {
      return this._httpclient.get(CHANGE_PASSWORD+'/'+updatedpassword+'/'+token,{responseType: 'text' as 'json'})
   }
   
   getDashBoardCount(userId:number)
  {
      return this._httpclient.get(DASHBOARD_COUNT+'/'+userId);
  }

  saveTechnology(technology:any)
  {
     return this._httpclient.post(TECH_SAVE,technology,{responseType: 'text' as 'json'});
  }

}
