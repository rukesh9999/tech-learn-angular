import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Technology } from './models/Technology';
import { CHANGE_PASSWORD, DASHBOARD_COUNT, FORGOT_PASSWORD, LOGIN, REGISTER, STATUSMAIN_ALL, TECH_ALL, TECH_EDIT, TECH_SAVE, TECH_UPDATE, VERIFY_USER_EXISTS_OR_NOT } from './techlearn.const';

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

  editTechnology(technologyId:number):Observable<Technology> {
   return this._httpclient.get<Technology>(TECH_EDIT+'/'+technologyId);
  }

  updateTechnology(technology:any){
    return this._httpclient.put(TECH_UPDATE,technology,{responseType:'text' as 'json'});
  }

   searchTechnology(searchTechnology:any):Observable<any>{
      return this._httpclient.get<Technology[]>(TECH_ALL,searchTechnology);

   }

   getAllStatusMains(){
     return this._httpclient.get(STATUSMAIN_ALL);
   }

}
