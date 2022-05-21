import { AbstractControl } from "@angular/forms";

export function confirmpasswordvalidator(control:AbstractControl):{[key:string]:any}|null {
     const password = control.get('password');
     const confirmpassword = control.get('confirmpassword');
     console.log('validator called..........');
     console.log('password...'+password);
     console.log('confirmpassword...'+confirmpassword);

     
     
     let forbidden= false;
     if(password.value!=null && password.value!='undefined' && password.value!='null'
     && confirmpassword.value!=null && confirmpassword.value!='undefined' && confirmpassword.value!='null')
     {
          if(password.value!=confirmpassword.value)
          {
             forbidden=true;
          }
     }
     console.log('..........'+forbidden);
    return  forbidden?{'mismatch':true}:null;
}